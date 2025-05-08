'use client';

import {
    PlusCircleIcon,
    StarIcon,
    QueueListIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const LINKS = [
    {
        name: 'Мои рецепты',
        href: '/my_recipes',
        icon: QueueListIcon,
    },
    { name: 'Избранное', href: '/favorites', icon: StarIcon },
    { name: 'Добавить новый рецепт', href: '/add_a_new_recipe', icon: PlusCircleIcon },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <ul className='flex gap-2 items-center justify-center'>
            {LINKS.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={clsx(
                                "flex items-center justify-center gap-2 p-3 font-extrabold",
                                {
                                    'text-blue-500': pathname === link.href,
                                    'text-gray-400 dark:hover:text-zinc-100 hover:text-zinc-700': pathname !== link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <span className="hidden lg:block">{link.name}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
