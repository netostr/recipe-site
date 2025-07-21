
import type { RecipeIngredient } from "@/app/_lib/definitions"
import RecipeIngredients from "@/app/_ui/components/my_recipes/RecipeIngredients";


export default async function RecipeIngredientsWrapper({ recipId, getRecipeIngredients, initServings }: {
    recipId: string;
    getRecipeIngredients: (recipId: string) => Promise<RecipeIngredient[]>;
    initServings: number;
}) {

    const recipeIngredients = await getRecipeIngredients(recipId);

    return (
        <RecipeIngredients recipeIngredients={recipeIngredients} initServings={initServings} />
    )
}
