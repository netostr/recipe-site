import InputPassword from '@/app/_ui/components/auth/InputPassword';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    isPassword?: boolean;
}

function CustomInput({ id, label, isPassword = false, ...rest }: Omit<CustomInputProps, "children">) {
    return (
        <div
            className="w-full flex flex-col items-center gap-2"
        >
            <label htmlFor={id}>{label}</label>
            {!isPassword ?
                (<input
                    {...rest}
                    id={id}
                    name={id}
                    className="w-full bg-slate-400/70 dark:bg-slate-800/70 rounded-lg p-3
                        outline-transparent outline-2 outline-offset-2 focus:outline-purple-600
                        placeholder:text-gray-600 dark:placeholder:text-gray-500
                    "
                />)
                :
                <InputPassword
                    {...rest}
                    id={id}
                    name={id}
                />
            }

        </div >
    )
}

export default CustomInput