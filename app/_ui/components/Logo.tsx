import { CakeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" title="На главную" className="flex flex-row items-center gap-1 hover:text-violet-700">
            <CakeIcon className="sm:h-10 sm:w-10 h-8 w-8" />
            <span className="sm:text-4xl text-3xl hidden sm:block">Блокнот рецептов</span>
        </Link >
    );
}