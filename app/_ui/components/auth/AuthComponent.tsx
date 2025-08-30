'use client';

import SignupForm from "@/app/_ui/components/auth/SignupForm";
import SigninForm from "@/app/_ui/components/auth/SigninForm";
import ToggleBox from "@/app/_ui/components/auth/ToggleBox";
import { useState } from "react";
import clsx from "clsx";

export default function AuthComponent() {
    const [hasAccount, setHasAccount] = useState(true)

    return (
        <article
            className="rounded-4xl bg-amber-50 dark:bg-violet-900 shadow-2xl w-full
                relative z-0 overflow-hidden"
        >
            <ToggleBox hasAccount={hasAccount} setHasAccount={setHasAccount} />
            <div className={clsx(
                "w-[200%] md:w-full md:py-0",
                "flex items-center",
                "md:transition-transform transition-[padding] duration-500 delay-500",
                {
                    "md:translate-x-1/2 pt-50 pb-0": hasAccount,
                    "md:translate-x-0 pt-0 pb-50": !hasAccount
                }
            )}>
                <SigninForm
                    className={`${hasAccount ? "visible" : "invisible"} 
                        transition-[visibility] delay-500 duration-0
                        w-full max-w-1/2 
                `} />
                <SignupForm
                    className={`${!hasAccount ? "visible" : "invisible"} 
                        transition-[visibility] delay-500 duration-0
                        w-full max-w-1/2 -translate-x-full
                `} />
            </div>
        </article>
    )
}