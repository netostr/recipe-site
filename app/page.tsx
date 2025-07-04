import Link from "next/link";
import RecipeCard from "@/app/_ui/components/RecipeCard";
import { recipeExamples } from "@/app/_lib/recipe-examples"

export default function Home() {
    return (
        <>
            <section className="flex flex-col justify-center items-center min-h-[calc(100dvh-6rem)] text-center
            animate-change-bg bg-no-repeat bg-cover bg-center dark:bg-red-900/40 dark:bg-blend-multiply rounded-4xl p-5 w-full select-none">
                <div className="bg-red-500/70 mb-10 pt-5 px-5 rounded-4xl">
                    <h1 className="text-6xl mb-6">
                        Блокнот рецептов
                    </h1>
                    <p className="text-4xl sm:text-5xl mb-12">
                        Создайте свою уникальную кулинарную коллекцию. Сохраняйте любимые рецепты, добавляйте свои заметки и готовьте с удовольствием
                    </p>
                </div>

                <div className="flex gap-8 flex-col sm:flex-row w-full sm:w-auto">
                    <Link
                        href='#'
                        className="cursor-pointer rounded-full active:scale-[.90] transition-transform w-full sm:w-auto sm:min-w-50
                        outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-blue-500
                       bg-blue-500 shadow-blue-500/40 shadow-lg opacity-80 hover:opacity-100 py-3 px-4 sm:px-6"
                    >
                        Создать рецепт
                    </Link>
                    <Link
                        href='#examples'
                        className="cursor-pointer rounded-full active:scale-[.90] transition-transform w-full sm:w-auto sm:min-w-50
                        outline-transparent outline-2 outline-solid outline-offset-2 focus-visible:outline-blue-500
                        bg-blue-500 shadow-blue-500/40 shadow-lg opacity-80 hover:opacity-100 py-3 px-4 sm:px-6">
                        Примеры рецептов
                    </Link>
                </div>
            </section>
            <section
                className="flex flex-col gap-10 justify-center items-center text-center transition-height select-none bg-purple-500/40 rounded-4xl p-5 max-w-full"
                id="examples"
            >
                <h2 className="text-5xl">Примеры рецептов</h2>
                {recipeExamples.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} />
                })}
            </section>
        </>
    );
}
