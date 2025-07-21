import { getRecipeDescriptionExampleByRecipeId, getRecipeIngredientExamplesByRecipeId, getRecipeStepExamplesByRecipeId } from "@/app/_lib/data";
import Recipe from "@/app/_ui/components/my_recipes/Recipe";
import { notFound } from "next/navigation";

export default async function RecipeExample(props: {
    params: Promise<{
        recipe_example_id: string;
    }>
}) {

    const params = await props.params;
    const recipId = params.recipe_example_id;
    const recipeDescription = getRecipeDescriptionExampleByRecipeId(recipId);
    if (!recipeDescription) {
        notFound();
    }

    return (
        <Recipe
            recipId={recipId}
            recipeDescription={recipeDescription}
            getRecipeIngredients={getRecipeIngredientExamplesByRecipeId}
            getRecipeSteps={getRecipeStepExamplesByRecipeId} />
    )
}