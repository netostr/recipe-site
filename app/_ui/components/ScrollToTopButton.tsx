"use client"

import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>

            <button onClick={scrollToTop}
                className={clsx(
                    "fixed -bottom-20 right-5 p-2 bg-zinc-400/80 dark:bg-gray-600/80 shadow-md shadow-black rounded-full cursor-pointer z-1000 transition-['bottom']",
                    {
                        "bottom-5": isVisible,
                    }
                )}
                type="button"
            >
                <ChevronUpIcon className="sm:h-10 sm:w-10 h-8 w-8" />
            </button >
        </>
    );
}
