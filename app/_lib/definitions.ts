export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type RecipeDescription = {
    id: string;
    user_id: string;
    title: string;
    description: string;
    cook_time: string;
    servings: number;
    calories: string;
    image_url?: string;
    favorite: boolean;
}

export const IngredientUnits = {
    gram: "г",
    kilogram: "кг",
    pound: "фунт",
    ounce: "унция",
    liter: "л",
    milliliter: "мл",
    tablespoon: "столовая ложка",
    teaspoon: "чайная ложка",
    cup250: "стакан 250 мл",
    cup200: "стакан 200 мл",
    handful: "горсть",
    pinch: "щепотка",
    pieces: "шт",
    taste: "по вкусу",
    bunch: "пучок",
    clove: "зубчик"
} as const;

type IngredientUnitsKeys = keyof typeof IngredientUnits
type IngredientUnitsName = (typeof IngredientUnits)[IngredientUnitsKeys]

export type RecipeIngredient = {
    id: string;
    recipe_id: string;
    name: string;
    amount?: number;
    unit: IngredientUnitsName;
}


export type RecipeStep = {
    id: string;
    recipe_id: string;
    num_step: number;
    description: string;
    image_url?: string;
}


export type RecipeCardType = Omit<RecipeDescription, "user_id">
