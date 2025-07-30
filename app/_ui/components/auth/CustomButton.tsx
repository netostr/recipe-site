import { ComponentProps } from "react";
import clsx from 'clsx';

function CustomButton({ children, className, ...rest }: ComponentProps<"button">) {
    return (
        <button
            {...rest}
            className={clsx(
                "bg-amber-500/80 py-3 px-5",
                "cursor-pointer rounded-full active:scale-90 transition-transform",
                "w-auto min-w-50",
                "outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-amber-500/80",
                className
            )}
        >
            {children}
        </button>
    )
}

export default CustomButton