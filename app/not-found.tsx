import { CustomLink } from "./_ui/components/CustomLink";

export default function NotFound() {
    return (
        <article className="bg-[url(/sad_hungry.jpg)] bg-cover bg-no-repeat bg-center bg-gray-500 dark:bg-blend-multiply
        min-w-full min-h-[calc(100dvh-12rem)] flex flex-col justify-center items-center gap-5 text-center p-5 rounded-4xl
        ">
            <h2 className="text-4xl font-semibold bg-linear-to-t from-transparent via-stone-950/60 to-transparent
             text-zinc-100 rounded-4xl px-5 py-2">
                Упс! Что-то пошло не так, этой страницы не существует
            </h2>
            <p className="text-3xl bg-linear-to-t from-transparent via-stone-950/60 to-transparent text-zinc-100 rounded-4xl px-5 py-2">Не удалось найти запрошенный рецепт</p>
            <CustomLink
                href="/"
            >
                На главную
            </CustomLink>
        </article>
    );
}