import type { RecipeStep } from "@/app/_lib/definitions"
import Image from "next/image"

export default function RecipeDirections({ recipeSteps }: { recipeSteps: RecipeStep[] }) {
    return (
        <section className="bg-linear-45 from-red-400 to-red-700 w-full p-5 rounded-4xl flex flex-col justify-center items-center gap-10">
            <h2 className="text-4xl font-semibold">
                Инструкция приготовления
            </h2>
            {recipeSteps.map(step => {
                return <RecipeStepComponent key={step.id} step={step} />
            })}
        </section >
    )
}


function RecipeStepComponent({ step }: { step: RecipeStep }) {
    return (
        <section className="bg-linear-to-l from-fuchsia-600 to-transparent rounded-4xl flex flex-col justify-center items-center gap-10 p-5 w-full text-center">
            <h3 className="text-3xl font-medium">Шаг {step.num_step}</h3>
            <div className="flex w-full justify-center items-center gap-10 flex-wrap md:flex-nowrap">
                {step.image_url ?
                    <div className="relative aspect-4/3 w-full md:w-1/2 rounded-2xl overflow-hidden">
                        <Image
                            src={step.image_url}
                            alt="Изображение готового блюда"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    :
                    null
                }
                <p className="text-3xl md:w-1/2 w-auto">
                    {step.description}
                </p>
            </div>
        </section>
    )
}