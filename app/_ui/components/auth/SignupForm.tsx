"use client";

import Link from "next/link";
import CustomInput from "@/app/_ui/components/custom_components/CustomInput";
import CustomButton from "@/app/_ui/components/custom_components/CustomButton";
import clsx from "clsx";
import { startTransition, useActionState, useCallback, useRef } from "react";
import {
  checkUserExistence,
  regisration,
  StateEmail,
} from "@/app/_lib/actions";
import { ActionState } from "@/app/_lib/utils";
import { useReCaptcha } from "next-recaptcha-v3";

const initialState: ActionState = { message: null, errors: {} };
const initialStateEmail: StateEmail = { message: null, errors: {} };

export default function SignupForm({ className }: { className?: string }) {
  const [state, formAction, isPending] = useActionState(
    regisration,
    initialState
  );
  const [stateEmail, formActionEmail, isPendingEmail] = useActionState(
    checkUserExistence,
    initialStateEmail
  );
  const prevEmail = useRef("");

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const token = await executeRecaptcha("signUp");
      formData.append("recaptcha_token", token);

      startTransition(() => formAction(formData));
    },
    [executeRecaptcha, formAction]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "flex flex-col justify-center items-center gap-5 p-10 z-1",
        className
      )}
    >
      <h1 className="text-4xl font-bold mb-5">Регистрация</h1>
      <CustomInput
        id="name"
        label="Логин"
        placeholder="Введите логин"
        defaultValue={state.data?.name}
        required
        verificationErrors={[...(state.errors?.name ?? [])]}
        isPending={isPending}
      />
      <CustomInput
        id="email"
        label="Почта"
        inputType="email"
        placeholder="Введите электронную почту"
        onFocus={(e) => (prevEmail.current = e.target.value)}
        onBlur={(e) =>
          prevEmail.current != e.target.value &&
          startTransition(() => formActionEmail(e.target.value))
        }
        defaultValue={state.data?.email}
        required
        verificationErrors={[
          ...(stateEmail.errors?.email ?? state.errors?.email ?? []),
        ]}
        isPending={isPendingEmail || isPending}
      />
      <CustomInput
        id="password"
        label="Пароль"
        inputType="password"
        placeholder="Введите пароль"
        minLength={16}
        autoComplete="new-password"
        defaultValue={state.data?.password}
        required
        verificationErrors={[...(state.errors?.password ?? [])]}
        isPending={isPending}
      />
      <CustomInput
        id="confirm_password"
        label="Повторить пароль"
        inputType="password"
        placeholder="Повторите пароль"
        autoComplete="new-password"
        defaultValue={state.data?.confirm_password}
        required
        verificationErrors={[...(state.errors?.confirm_password ?? [])]}
        isPending={isPending}
      />
      <CustomButton
        type="submit"
        disabled={!!stateEmail.errors?.email || isPending}
      >
        {isPending ? "Регистрация..." : "Зарегистрироваться"}
      </CustomButton>
      {state.message && (
        <p className="text-xl text-red-500" key={state.message}>
          {state.message}
        </p>
      )}
      <p className="text-center text-xl">
        Нажимая кнопку, принимаю условия&nbsp;
        <Link
          href="/policy"
          className="underline outline-transparent outline-2 outline-offset-2 focus-visible:outline-purple-600"
        >
          Политики конфинденциальности
        </Link>
        &nbsp;и&nbsp;
        <Link
          href="/policy"
          className="underline outline-transparent outline-2 outline-offset-2 focus-visible:outline-purple-600"
        >
          Пользователького соглашения
        </Link>
      </p>
    </form>
  );
}
