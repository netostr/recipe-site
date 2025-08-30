'use client';

import CustomButton from "@/app/_ui/components/custom_components/CustomButton"
import clsx from "clsx";

function ToggleBox({ hasAccount, setHasAccount }: {
    hasAccount: boolean;
    setHasAccount: (arg: boolean) => void
}) {
    return (
        <div className={clsx("w-full h-full absolute text-zinc-100",
            "before:content-[''] before:absolute md:before:w-[300%] md:before:h-full before:bg-indigo-500",
            "before:z-2 md:before:rounded-[150px] before:rounded-[20vw] md:before:transition-[left] before:duration-1000",
            "before:w-full before:h-[300%] before:transition-[top] md:before:top-0",
            {
                "md:before:-left-[250%] before:-top-[280%]": hasAccount,
                "md:before:left-[50%] before:top-[80%]": !hasAccount,
            },
        )}
        >
            <div
                className={clsx(
                    "absolute w-full md:max-w-1/2 md:h-full h-[20%] flex flex-col justify-center items-center gap-5 px-10 text-center",
                    "z-2 md:transition-[left] transition-[top] duration-1000 md:top-0",
                    {
                        "md:left-0 top-0": hasAccount,
                        "md:left-1/2 top-[80%]": !hasAccount,
                    },
                )}

            >
                <h2 className="xl:text-7xl lg:text-5xl text-4xl font-black">Добро пожаловать!</h2>
                <p className="md:text-4xl text-3xl font-medium">{hasAccount ? "Нет аккаунта?" : "Уже есть аккаунт?"}</p>
                <CustomButton
                    className="bg-transparent border-2 border-amber-50"
                    onClick={() => setHasAccount(!hasAccount)}
                >
                    {hasAccount ? "Зарегистрироваться" : "Войти"}
                </CustomButton>
            </div>
        </div >
    )
}

export default ToggleBox