import Link from "next/link";
import CustomInput from "@/app/_ui/components/auth/CustomInput";
import CustomButton from "@/app/_ui/components/auth/CustomButton"
import clsx from "clsx";


export default function SignupForm({ className }: {
    className?: string
}) {

    return (
        <form action={''} className={clsx(
            "flex flex-col justify-center items-center gap-5 p-10 z-1",
            className
        )}
        >
            <h1 className="text-4xl font-bold mb-5">Регистрация</h1>
            <CustomInput id="name" label="Логин" placeholder="Введите логин" required />
            <CustomInput id="email" label="Почта" type="email" placeholder="Введите электронную почту" required />
            <CustomInput id="password" label="Пароль" isPassword placeholder="Введите пароль" minLength={16} autoComplete="new-password" required />
            <CustomInput id="confirm_password" label="Повторить пароль" isPassword placeholder="Повторите пароль" autoComplete="new-password" required />
            <CustomButton type="submit">Зарегистрироваться</CustomButton>
            <p
                className="text-center text-xl"
            >
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
    )
}