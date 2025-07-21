import type { RecipeStep } from "@/app/_lib/definitions"
import RecipeDirections from "@/app/_ui/components/my_recipes/RecipeDirections";

export default async function RecipeDirectionsWrapper({ recipId, getRecipeSteps }: {
    recipId: string;
    getRecipeSteps: (recipId: string) => Promise<RecipeStep[]>;
}) {
    const recipeSteps = await getRecipeSteps(recipId)

    return (
        <RecipeDirections recipeSteps={recipeSteps} />
    )
}

