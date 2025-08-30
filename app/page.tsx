import RecipeCard from "@/app/_ui/components/my_recipes/RecipeCard";
import { recipeDescriptionExamples } from "@/app/_lib/recipe-examples"
import { CustomLink } from "@/app/_ui/components/custom_components/CustomLink";

export default function Home() {
    return (
        <>
            <section className="flex flex-col justify-center items-center min-h-[calc(100dvh-6rem)] text-center 
            animate-change-bg bg-no-repeat bg-cover bg-center bg-orange-300/80 bg-blend-multiply rounded-4xl p-5 w-full">
                <header className=" mb-10 pt-5 px-5 rounded-4xl bg-linear-to-t from-stone-950/80 to-stone-950/10  text-zinc-100">
                    <h1 className="text-6xl mb-6 font-bold">
                        Блокнот рецептов
                    </h1>
                    <p className="text-4xl sm:text-5xl mb-12">
                        Создайте свою уникальную кулинарную коллекцию. Сохраняйте любимые рецепты, добавляйте свои заметки и готовьте с удовольствием
                    </p>
                </header>

                <footer className="flex gap-8 flex-col sm:flex-row w-full sm:w-auto">
                    <CustomLink
                        href="#"
                    >
                        Создать рецепт
                    </CustomLink>
                    <CustomLink
                        href="#examples"
                    >
                        Примеры рецептов
                    </CustomLink>
                </footer>
            </section>
            <section
                className="flex flex-col gap-10 justify-center items-center text-center bg-purple-500/40 rounded-4xl p-5 w-full"
                id="examples"
            >
                <h2 className="text-5xl font-semibold">Примеры рецептов</h2>
                {recipeDescriptionExamples.map((recipeDescription) => {
                    return <RecipeCard key={recipeDescription.id} recipeDescription={recipeDescription} recipeHref={`/examples/${recipeDescription.id}`} />
                })}
            </section>
        </>
    );
}
