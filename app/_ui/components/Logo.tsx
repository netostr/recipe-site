import { CakeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" title='На главную' className="flex flex-row items-center gap-1">
            <CakeIcon className="md:h-10 md:w-10 h-8 w-8" />
            <span className="md:text-4xl text-3xl hidden sm:block">Блокнот рецептов</span>
        </Link>
    );
}