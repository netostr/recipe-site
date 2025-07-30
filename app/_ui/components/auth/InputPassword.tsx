'use client'

import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function InputPassword({ children, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full overflow-hidden flex items-stretch rounded-lg outline-transparent outline-2 outline-offset-2 focus-within:outline-purple-600">
            <input
                {...rest}
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-slate-400/70 dark:bg-slate-800/70 p-3 outline-transparent outline-0 placeholder:text-gray-600 dark:placeholder:text-gray-500"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="w-8 bg-pink-400 dark:bg-pink-900 outline-transparent outline-0 cursor-pointer"
            >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
        </div>
    )
}

export default InputPassword