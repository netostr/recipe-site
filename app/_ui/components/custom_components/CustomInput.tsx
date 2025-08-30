import clsx from 'clsx';
import { ComponentProps, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { EyeIcon, EyeSlashIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Tooltip from '@/app/_ui/components/custom_components/Tooltip';


type CustomInputProps = {
    id: string;
    label: string;
    inputType?: string;
    isPending?: boolean;
    verificationErrors?: string[];
} & Omit<ComponentProps<"input">, "children">

function CustomInput({ id, label, inputType = 'text', isPending = false, verificationErrors = [], className, ...rest }: CustomInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const hasErrorServer = verificationErrors?.length != 0;
    const isPassword = inputType === 'password';

    return (
        <div
            className="w-full flex flex-col items-center gap-2"
        >
            <div className='w-full flex items-center justify-between'>
                <div className='h-8 w-8'>
                    {hasErrorServer &&
                        <Tooltip
                            tooltipText={verificationErrors.join("\n")}
                            tooltipColor='red'
                            tooltipPosition='right-center'
                        >
                            <ExclamationTriangleIcon className='text-red-600 cursor-help' />
                        </Tooltip>
                    }
                </div>
                <div className='flex gap-2'>
                    <label htmlFor={id}>
                        {label}
                    </label>
                    {
                        isPassword && <Tooltip
                            tooltipText='Пароль должен содержать хотя бы одну заглавную букву, строчную букву, одну цифру, специальный символ и иметь длину не менее 16 символов'
                        >
                            <ExclamationCircleIcon className='h-8 w-8 cursor-help' />
                        </Tooltip>
                    }
                </div>
                <div className='h-8 w-8'>
                    {isPending && <ArrowPathIcon className='animate-spin' />}
                </div>
            </div>
            <div className="w-full overflow-hidden flex items-stretch rounded-lg
                outline-transparent outline-2 outline-offset-2 focus-within:outline-purple-600 transition-[outline] duration-300">
                <input
                    {...rest}
                    id={id}
                    name={id}
                    type={isPassword ?
                        showPassword ? 'text' : 'password'
                        : inputType}
                    className={clsx("w-full bg-slate-400/70 dark:bg-slate-800/70 p-3",
                        "outline-transparent outline-0",
                        "placeholder:text-gray-600 dark:placeholder:text-gray-500",
                        {
                            "inset-shadow-red-700 inset-shadow-[0_0_10px]": hasErrorServer,
                            "autofill:inset-shadow-purple-700 autofill:inset-shadow-[0_0_10px]": !hasErrorServer
                        },
                        className
                    )}
                />


                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="w-8 bg-pink-400 dark:bg-pink-900 outline-transparent outline-0 cursor-pointer"
                    >
                        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </button>
                )}
            </div>

        </div >
    )
}

export default CustomInput