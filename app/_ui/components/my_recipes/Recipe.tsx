import type { RecipeCardType, RecipeIngredient, RecipeStep } from "@/app/_lib/definitions";
import RecipeTitle from "@/app/_ui/components/my_recipes/RecipeTitle";
import RecipeIngredients from "@/app/_ui/components/my_recipes/RecipeIngredients";
import RecipeDirections from "@/app/_ui/components/my_recipes/RecipeDirections";

export default function Recipe({ recipeDescription, recipeIngredients, recipeSteps
}: {
    recipeDescription: RecipeCardType,
    recipeIngredients: RecipeIngredient[],
    recipeSteps: RecipeStep[],
}) {
    return (
        <>
            <RecipeTitle recipeDescription={recipeDescription} />
            <RecipeIngredients recipeIngredients={recipeIngredients} initServings={recipeDescription.servings} />
            <RecipeDirections recipeSteps={recipeSteps} />
        </>
    )
}