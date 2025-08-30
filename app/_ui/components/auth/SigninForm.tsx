import CustomInput from "@/app/_ui/components/custom_components/CustomInput";
import CustomButton from "@/app/_ui/components/custom_components/CustomButton";
import clsx from "clsx";

function SigninForm({ className }: {
    className?: string;
}) {
    return (
        <form action={''} className={clsx(
            "flex flex-col justify-center items-center gap-5 p-10 z-1",
            className
        )}
        >
            <h1 className="text-4xl font-bold mb-5">Вход</h1>
            <CustomInput
                id="email"
                label="Почта"
                inputType="email"
                placeholder="Введите электронную почту"
            />
            <CustomInput
                id="password"
                label="Пароль"
                inputType="password"
                placeholder="Введите пароль" />
            <CustomButton
                type="submit"
            >
                Войти
            </CustomButton>
        </form>
    )
}

export default SigninForm