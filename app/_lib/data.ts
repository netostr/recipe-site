import { recipeDescriptionExamples, recipeIngredientExamples, recipeStepExamples } from "@/app/_lib/recipe-examples";
import { RecipeIngredient, RecipeStep } from "@/app/_lib/definitions";

export function getRecipeDescriptionExampleByRecipeId(recipeId: string) {

    const recipeDescription = recipeDescriptionExamples.find((elem) => elem.id === recipeId);


    return recipeDescription;
}

export function getRecipeIngredientExamplesByRecipeId(recipeId: string) {
    return getExamplesById<RecipeIngredient>(recipeIngredientExamples, recipeId);
}


export function getRecipeStepExamplesByRecipeId(recipeId: string) {
    return getExamplesById<RecipeStep>(recipeStepExamples, recipeId);
}


export function getExamplesById<T extends { recipe_id: string }>(partRecipe: T[], recipeId: string): Promise<T[]> {

    const examplesById = partRecipe.filter((elem) => elem.recipe_id === recipeId);

    return new Promise((res) => res(examplesById));
}