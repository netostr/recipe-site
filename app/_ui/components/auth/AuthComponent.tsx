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
            className="rounded-4xl bg-amber-50 dark:bg-violet-900 shadow-2xl
                w-full min-h-[1000px] md:min-h-[calc(100dvh-6rem)] h-full [@media(max-height:880px)]:md:min-h-[820px]
                relative z-0 overflow-hidden"
        >
            <ToggleBox hasAccount={hasAccount} setHasAccount={setHasAccount} />
            <div className={clsx(
                "absolute w-full h-[80%] md:h-full",
                "flex items-center",
                "md:transition-[left] transition-[top] duration-500 delay-500 md:top-0",
                {
                    "md:left-1/2 top-[20%]": hasAccount,
                    "md:left-0 top-0": !hasAccount
                }
            )}>
                <SigninForm
                    className={`${hasAccount ? "visible" : "invisible"} 
                        transition-[visibility] delay-500 duration-0
                        w-full md:max-w-1/2 h-max absolute
                `} />
                <SignupForm
                    className={`${!hasAccount ? "visible" : "invisible"} 
                        transition-[visibility] delay-500 duration-0
                        w-full md:max-w-1/2 h-max absolute
                `} />
            </div>
        </article>
    )
}