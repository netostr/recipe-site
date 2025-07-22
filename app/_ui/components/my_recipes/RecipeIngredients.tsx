"use client"

import type { RecipeIngredient } from "@/app/_lib/definitions"
import { useState } from "react"

export default function RecipeIngredients({ recipeIngredients, initServings }: { recipeIngredients: RecipeIngredient[]; initServings: number; }) {
    const [servings, setServings] = useState(initServings);

    return (
        <section className="bg-linear-45 from-fuchsia-400 to-fuchsia-900 w-full p-5 rounded-4xl flex flex-col justify-center items-center gap-10">
            <h2 className="text-4xl font-semibold">
                Ингредиенты
            </h2>

            <div className="flex flex-col gap-5 justify-center items-center">
                <label htmlFor="servings" className="text-4xl">Количество порций</label>
                <div className="flex gap-3">
                    <button
                        className="rounded-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400/30 disabled:active:scale-none
                        w-11 aspect-1/1 font-mono font-semibold text-4xl
                        outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-pink-600
                        text-amber-500 shadow-[0_0_5px] shadow-indigo-900 cursor-pointer active:scale-90 transition
                        "
                        onClick={() => setServings(servings - 1)}
                        disabled={servings <= 1}
                    >
                        -
                    </button>
                    <input
                        id="servings"
                        className="text-4xl font-semibold w-16 text-center bg-gray-400/30 font-sans rounded-xl"
                        value={servings}
                        type="text"
                        min={1}
                        max={50}
                        disabled
                    />
                    <button
                        className="rounded-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400/30 disabled:active:scale-none
                        w-11 aspect-1/1 font-mono font-semibold text-4xl
                        outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-pink-600                        
                        text-amber-500 shadow-[0_0_4px] shadow-black/25 cursor-pointer active:scale-90 transition
                        "
                        onClick={() => setServings(servings + 1)}
                        disabled={servings >= 50}
                    >
                        +
                    </button>
                </div>
            </div>
            <ol className="list-decimal w-full px-10 sm:text-3xl max-w-4xl flex flex-col">
                {recipeIngredients.map(ingridient => {
                    return <RecipeIngredientComponent key={ingridient.id} ingridient={ingridient} ratioServings={servings / initServings} />
                })}
            </ol>
        </section >
    )
}


function RecipeIngredientComponent({ ingridient, ratioServings }: { ingridient: RecipeIngredient; ratioServings: number; }) {
    const amount = ingridient.amount && Math.round(ingridient.amount * ratioServings * 100) / 100

    return (
        <li className="odd:bg-gradient-to-r odd:from-transparent odd:via-gray-400/40 odd:to-transparent">
            <div className="flex justify-between items-center">
                <span className="max-w-1/2">
                    {ingridient.name}
                </span>
                <span className="text-end max-w-1/2">
                    {amount} {ingridient.unit}
                </span>
            </div>
        </li>
    )
}