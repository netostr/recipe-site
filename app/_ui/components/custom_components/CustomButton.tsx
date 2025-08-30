import { ComponentProps } from "react";
import clsx from 'clsx';

function CustomButton({ children, className, type = "button", ...rest }: ComponentProps<"button">) {
    return (
        <button
            {...rest}
            type={type}
            className={clsx(
                "bg-amber-500/80 py-3 px-5",
                "cursor-pointer rounded-full active:scale-90 transition-transform",
                "w-auto min-w-50",
                "outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-amber-500/80",
                "disabled:text-gray-500 disabled:shadow-none disabled:border-gray-700 disabled:bg-gray-800/20 disabled:cursor-auto disabled:active:scale-none",
                className
            )}
        >
            {children}
        </button>
    )
}

export default CustomButton