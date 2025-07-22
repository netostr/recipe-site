export function SkeletonRecipeIngredients() {
    return (
        <div className="bg-linear-45 from-fuchsia-400 to-fuchsia-900 w-full p-5 rounded-4xl select-none">
            <div className="animate-pulse flex flex-col justify-center items-center gap-10 ">
                <div className="w-43 max-w-full bg-gray-400 h-10 rounded-4xl" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="w-58 max-w-full bg-gray-400 h-10 rounded-4xl"></div>
                    <div className="flex gap-3">
                        <div
                            className="rounded-full bg-pink-600 
                            w-11 aspect-1/1 font-mono font-semibold text-4xl
                            text-amber-500 shadow-[0_0_5px] shadow-indigo-900
                            text-center
                            "
                        >
                            -
                        </div>
                        <div className="w-16 bg-gray-400/30 rounded-xl flex justify-center items-center">
                            <div className="w-10 max-w-full bg-gray-400 h-7 rounded-4xl" />
                        </div>
                        <div
                            className="rounded-full bg-pink-600 
                            w-11 aspect-1/1 font-mono font-semibold text-4xl
                            text-amber-500 shadow-[0_0_5px] shadow-indigo-900
                            text-center
                            "
                        >
                            +
                        </div>
                    </div>
                </div>
                <div className="w-full px-10 max-w-4xl flex flex-col">
                    {
                        Array(3).fill('').map((_, index) => {
                            return (
                                <div key={index} className="odd:bg-gradient-to-r odd:from-transparent odd:via-gray-400/40 odd:to-transparent">
                                    <div className="flex justify-between items-center h-9">
                                        <div className="max-w-1/2 w-70 bg-gray-400 h-5 rounded-4xl" />
                                        <div className="max-w-1/2 w-70 bg-gray-400 h-5 rounded-4xl" />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div >
    );
}


export function SkeletonRecipeDirections() {
    return (
        <>
            <div className="bg-linear-45 from-red-400 to-red-700 w-full p-5 rounded-4xl flex flex-col justify-center items-center gap-10 select-none">
                <div className="w-86 max-w-full bg-gray-400 h-10 rounded-4xl animate-pulse" />

                <div className="bg-linear-to-l from-fuchsia-600 to-transparent rounded-4xl flex flex-col justify-center items-center gap-10 p-5 w-full text-center animate-pulse">
                    <div className="w-17 max-w-full bg-gray-400 h-8 rounded-4xl" />

                    <div className="flex w-full justify-center items-center gap-10 flex-wrap md:flex-nowrap">
                        <div className="aspect-4/3 w-full md:w-1/2 h-full rounded-2xl bg-gray-400" />
                        <div className="md:w-1/2 w-full flex flex-col gap-3">
                            <div className="bg-gray-400 h-7 rounded-4xl" />
                            <div className="bg-gray-400 h-7 rounded-4xl" />
                            <div className="bg-gray-400 h-7 rounded-4xl" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}