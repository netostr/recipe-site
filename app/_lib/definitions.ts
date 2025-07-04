export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Recipe = {
    id: string;
    user_id: string;
    title: string;
    description: string;
    cook_time: string;
    servings: number;
    calories: string;
    image_url: string;
    recipe_url: string;
}

export type RecipeStep = {
    id: string;
    recipe_id: string;
    num_step: number;
    description: string;
    image_url: string;
}

export type RecipeIngredient = {
    id: string;
    recipe_id: string;
    name: string;
    amount: number;
    unit: string;
}


export type RecipeCardType = Omit<Recipe, "user_id">
