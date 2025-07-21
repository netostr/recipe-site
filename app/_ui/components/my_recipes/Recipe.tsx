import type { RecipeCardType, RecipeIngredient, RecipeStep } from "@/app/_lib/definitions";
import RecipeTitle from "@/app/_ui/components/my_recipes/RecipeTitle";
import { Suspense } from "react";
import RecipeIngredientsWrapper from "@/app/_ui/components/my_recipes/RecipeIngredientsWrapper";
import RecipeDirectionsWrapper from "@/app/_ui/components/my_recipes/RecipeDirectionsWrapper";
import { SkeletonRecipeDirections, SkeletonRecipeIngredients } from "@/app/_ui/components/skeletons";

export default function Recipe({ recipId, recipeDescription, getRecipeIngredients, getRecipeSteps }: {
    recipId: string;
    recipeDescription: RecipeCardType;
    getRecipeIngredients: (recipId: string) => Promise<RecipeIngredient[]>;
    getRecipeSteps: (recipId: string) => Promise<RecipeStep[]>;
}) {

    return (
        <>
            <RecipeTitle recipeDescription={recipeDescription} />
            <Suspense fallback={<SkeletonRecipeIngredients />}>
                <RecipeIngredientsWrapper recipId={recipId} getRecipeIngredients={getRecipeIngredients} initServings={recipeDescription.servings} />
            </Suspense>
            <Suspense fallback={<SkeletonRecipeDirections />}>
                <RecipeDirectionsWrapper recipId={recipId} getRecipeSteps={getRecipeSteps} />
            </Suspense>
        </>
    )
}