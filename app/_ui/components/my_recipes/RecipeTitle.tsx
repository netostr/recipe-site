import type { RecipeCardType } from "@/app/_lib/definitions";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClockIcon, FireIcon } from "@heroicons/react/20/solid";
import Image from "next/image";


export default function RecipeTitle({ recipeDescription }: { recipeDescription: RecipeCardType }) {
    return (
        <section className="bg-linear-45 from-orange-300 to-orange-700
         rounded-4xl flex flex-col justify-center items-center gap-10 p-5 w-full text-center">
            <h1 className="sm:text-5xl text-4xl font-bold">
                {recipeDescription.title}
            </h1>
            <div className="flex w-full justify-center items-center gap-10 flex-wrap md:flex-nowrap">
                <div className="relative aspect-4/3 w-full md:w-1/2 rounded-2xl overflow-hidden ">
                    <Image
                        src={recipeDescription.image_url}
                        alt="Изображение готового блюда"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
                <p className="sm:text-4xl text-3xl md:w-1/2 w-auto">
                    {recipeDescription.description}
                </p>
            </div>

            <footer className="flex gap-3 bg-blue-500/80 rounded-4xl flex-col sm:flex-row sm:w-auto p-3">
                <span className="flex justify-center items-center gap-1 min-w-40">
                    <ClockIcon className="h-6 w-6" />
                    <span>{recipeDescription.cook_time} мин</span>
                </span>
                <span className="flex justify-center items-center gap-1 min-w-40">
                    <FontAwesomeIcon icon={faUtensils} className="h-6 w-6" />
                    <span>порций {recipeDescription.servings}</span>
                </span>
                <span className="flex justify-center items-center gap-1 min-w-40">
                    <FireIcon className="h-6 w-6" />
                    <span>{recipeDescription.calories} ккал</span>
                </span>
            </footer>
        </section>
    )
}