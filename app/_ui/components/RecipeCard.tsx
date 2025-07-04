import Link from "next/link";
import { ClockIcon, FireIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { RecipeCardType } from "@/app/_lib/definitions";


export default function RecipeCard({ recipe }: { recipe: RecipeCardType }) {
    return (
        <article
            style={{ backgroundImage: `url(${recipe.image_url})` }}
            className="any-hover:brightness-80 transition-all hover:brightness-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 
                bg-no-repeat bg-cover bg-center dark:bg-red-900/40 dark:bg-blend-multiply rounded-4xl select-none">
            <Link href={`${recipe.recipe_url}`} className="flex flex-col justify-center items-center min-h-80 text-center p-5 w-full rounded-4xl">
                <header className="grow flex flex-col gap-5 justify-center mb-10 bg-red-500/70 rounded-4xl p-5">
                    <h3 className="text-4xl">{recipe.title}</h3>
                    <p className="text-3xl line-clamp-5 sm:line-clamp-2">{recipe.description}</p>
                </header>
                <footer className="flex gap-3 bg-blue-500/70 rounded-4xl  flex-col sm:flex-row sm:w-auto p-3">
                    <span className="flex justify-center items-center gap-1 min-w-40">
                        <ClockIcon className="h-6 w-6" />
                        <span>{recipe.cook_time} мин</span>
                    </span>
                    <span className="flex justify-center items-center gap-1 min-w-40">
                        <FontAwesomeIcon icon={faUtensils} className="h-6 w-6" />
                        <span>порций {recipe.servings}</span>
                    </span>
                    <span className="flex justify-center items-center gap-1 min-w-40">
                        <FireIcon className="h-6 w-6" />
                        <span>{recipe.calories} ккал</span>
                    </span>
                </footer>
            </Link>
        </article >
    )
}