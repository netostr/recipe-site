'use client'
import { useEffect, useState } from 'react';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';


const THEME_ARR = [
    {
        theme: 'system',
        icon: ComputerDesktopIcon,
    },
    {
        theme: 'dark',
        icon: MoonIcon,
    },
    {
        theme: 'light',
        icon: SunIcon,
    },
];


export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className='md:w-10 w-8' />
    }


    const ThemeIcon = THEME_ARR.find(item => item.theme === theme)?.icon;

    const handleToogle = () => {
        const numTheme = THEME_ARR.map(t => t.theme).indexOf(theme || 'system');
        const nextNumTheme = numTheme + 1 >= THEME_ARR.length ? 0 : numTheme + 1;
        setTheme(THEME_ARR[nextNumTheme].theme);
    }

    return (
        <button onClick={handleToogle} title={`${theme} mode`}>
            {ThemeIcon ? <ThemeIcon className="md:h-10 md:w-10 h-8 w-8 cursor-pointer" /> : null}
        </button>
    );
}
