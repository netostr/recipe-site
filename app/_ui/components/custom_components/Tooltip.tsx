'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react'

const TooltipColors = {
    'red': 'bg-red-600',
    'gray': 'bg-gray-600'
} as const

type TooltipColorsKeys = keyof typeof TooltipColors;

const TooltipPositions = {
    'left-top': '-translate-x-full left-0 -translate-y-full top-0',
    'left-center': '-translate-x-full left-0 -translate-y-1/2 top-1/2',
    'left-bottom': '-translate-x-full left-0 translate-y-full bottom-0',
    'right-top': 'translate-x-full right-0 -translate-y-full top-0',
    'right-center': 'translate-x-full right-0 -translate-y-1/2 top-1/2',
    'right-bottom': 'translate-x-full right-0 translate-y-full bottom-0',
    'center-top': '-translate-x-1/2 left-1/2 -translate-y-full top-0',
    'center-bottom': '-translate-x-1/2 left-1/2 translate-y-full bottom-0',

} as const

type TooltipPositionKeys = keyof typeof TooltipPositions

function Tooltip({ children, tooltipText, tooltipColor = 'gray', tooltipPosition = 'center-bottom' }:
    {
        children?: React.ReactNode,
        tooltipText?: string,
        tooltipColor?: TooltipColorsKeys,
        tooltipPosition?: TooltipPositionKeys,
    }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const tailwindTooltipColor = TooltipColors[tooltipColor];
    const tailwindTooltipPosition = TooltipPositions[tooltipPosition];


    useEffect(() => {
        const handleClickOutside = (e: TouchEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShowTooltip(false);
            }
        }
        document.addEventListener('touchstart', handleClickOutside);
        return () => document.removeEventListener('touchstart', handleClickOutside);
    }, [])

    return (
        <div
            className={`group relative`}
            onClick={() => setShowTooltip(!showTooltip)}
            ref={ref}
        >
            {children}
            <p
                className={clsx('absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
                    'rounded-xl px-3 py-2 whitespace-pre-line z-1 w-max max-w-40 md:max-w-50 lg:max-w-80 xl:max-w-110',
                    'text-sm text-amber-50 font-serif',
                    tailwindTooltipColor,
                    tailwindTooltipPosition,
                    {
                        'not-any-hover:opacity-100 not-any-hover:visible': showTooltip,
                    }
                )}
            >
                {tooltipText}
            </p>
        </div >
    )
}

export default Tooltip