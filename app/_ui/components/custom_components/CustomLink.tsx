import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
    children?: React.ReactNode;
    className?: string;
}

export function CustomLink({ children, className, ...rest }: CustomLinkProps) {
    return (
        <Link
            {...rest}
            className={clsx(
                "cursor-pointer rounded-full active:scale-90 transition-transform w-full sm:w-auto sm:min-w-50",
                "outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-blue-500",
                "bg-blue-500/80 shadow-blue-500/40 shadow-lg hover:bg-blue-500 py-3 px-4 sm:px-6",
                className,
            )}
        >
            {children}
        </Link>
    );
}
