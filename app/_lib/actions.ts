"use server";

import postgres from "postgres";
import { z } from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { validatedAction, verifyRecaptchaV3 } from "@/app/_lib/utils";

const sql = postgres(process.env.POSTGRES_URL!);

const User = z
  .object({
    name: z.string().trim().min(1, "Пожалуйста введите логин"),
    email: z
      .email({
        error: (iss) =>
          !iss.input
            ? "Пожалуйста введите адрес электронной почты"
            : "Указан неверный адрес электронной почты",
      })
      .toLowerCase()
      .trim(),
    password: z
      .string()
      .min(16, {
        error: (iss) => {
          return `Пароль должен быть более ${iss.minimum} символов`;
        },
      })
      .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
      .regex(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
      .regex(/\d/, "Пароль должен содержать хотя бы одну цифру")
      .regex(
        /[^A-Za-z0-9]/,
        "Пароль должен содержать хотя бы один специальный символ"
      ),
    confirm_password: z.string(),
    recaptcha_token: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Пароли не совпадают",
    path: ["confirm_password"],
  });

export type StateEmail = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export const regisration = validatedAction(User, async (data) => {
  const { name, email, password, recaptcha_token } = data;

  const { success: isRecaptchaValid, score } = await verifyRecaptchaV3(
    recaptcha_token
  );

  if (!isRecaptchaValid) {
    console.log(`reCAPTCHA failed with score: ${score}`);
    return {
      data,
      errors: {
        recaptcha_token: [
          "Проверка безопасности не пройдена. Попробуйте ещё раз.",
        ],
      },
    };
  }

  const dbEmail = await sql`
            SELECT COUNT(email) FROM users WHERE email=${email}
        `;
  if (dbEmail[0].count != 0)
    return {
      data,
      errors: {
        email: [`Пользователь с таким email уже есть`],
      },
    };

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${hashPassword})
        `;
  } catch {
    return {
      data,
      message: `Ошибка базы данных`,
    };
  }

  redirect("/");
});

export async function checkUserExistence(prevState: StateEmail, email: string) {
  const emailToLower = email.toLowerCase().trim();
  try {
    const dbEmail = await sql`
            SELECT COUNT(email) FROM users WHERE email=${emailToLower}
        `;
    if (dbEmail[0].count != 0)
      return {
        errors: {
          email: [`Пользователь с таким email уже есть`],
        },
      };
  } catch {
    return {
      message: `Ошибка базы данных`,
    };
  }

  return {};
}
