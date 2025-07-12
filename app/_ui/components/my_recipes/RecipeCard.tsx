import Link from "next/link";
import { ClockIcon, FireIcon, StarIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import type { RecipeCardType } from "@/app/_lib/definitions";
import Image from "next/image";


export default function RecipeCard({ recipeDescription, recipeHref }: { recipeDescription: RecipeCardType, recipeHref: string }) {
    return (
        <article
            className="any-hover:brightness-80 transition hover:brightness-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 
                        active:scale-95 active:shadow-transparent
                        bg-red-900/40 rounded-4xl select-none overflow-hidden">
            <Link href={`${recipeHref}`}>
                <div className="flex flex-col justify-center gap-10 items-center min-h-80 text-center p-5 w-full rounded-4xl relative z-0">
                    <header className="flex flex-row justify-between items-start w-full before:content-['']">
                        <h3 className="text-4xl rounded-4xl p-5 bg-linear-to-t from-stone-950/80 to-stone-950/10 text-zinc-100 font-medium ">{recipeDescription.title}</h3>
                        <div className=" h-8 w-8 ">
                            {recipeDescription.favorite ? <StarIcon className="text-amber-300" /> : null}
                        </div>
                    </header>
                    <Image
                        src={recipeDescription.image_url}
                        alt=""
                        fill
                        className="-z-1 object-cover"
                    />
                    <p className="text-3xl line-clamp-5 sm:line-clamp-2 rounded-4xl px-4 py-2 bg-linear-to-t from-stone-950/80 to-stone-950/10  text-zinc-100">
                        {recipeDescription.description}
                    </p>
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
                </div>
            </Link>
        </article >
    )
}