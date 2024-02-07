
class Recipe {
    constructor(name, ingredients, description, cookingTime) {
        this.name = name;
        this.ingredients = ingredients;
        this.description = description;
        this.cookingTime = cookingTime;
    }

    isValid() {
        return (
            this.name &&
            this.ingredients &&
            this.description &&
            typeof this.cookingTime === 'number' &&
            this.cookingTime > 0
        );
    }
}

class RecipeBook {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        if (recipe.isValid()) {
            this.recipes.push(recipe);
            console.log(`Рецепт "${recipe.name}" додано в книгу.`);
        } else {
            console.log(`Помилка: "${recipe.name}". Цей рецепт не є доданий в книгу.`);
        }
    }

    findRecipesByCookingTime(cookingTime) {
        return this.recipes.filter(recipe => recipe.cookingTime <= cookingTime);
    }

    findRecipesByIngredients(ingredients) {
        return this.recipes.filter(recipe => ingredients.every(ingredient => recipe.ingredients.includes(ingredient)));
    }
}

const recipes = [
    new Recipe("Рецепт 1", ["фета", "рукола"], "Приготувати", 0),
    new Recipe("Рецепт 2", ["селера", "буряк"], "Приготувати", 60),
    new Recipe("Рецепт 3", ["томати", "кріп"], "Приготувати", 120),
    new Recipe("Рецепт 4", ["картопля", "цибуля"], "Приготувати", 45), // Invalid recipe
    new Recipe("Рецепт 5", ["морква", "картопля"], "Приготувати", 75),
    new Recipe("Рецепт 6", ["морква", "картопля"], "Приготувати", 90),
];

const recipeBook = new RecipeBook();

recipes.forEach(recipe => recipeBook.addRecipe(recipe));

const recipesByCookingTime = recipeBook.findRecipesByCookingTime(60);
console.log("Рецепти, час приготування яких сягає менше або рівне 60хв:");
recipesByCookingTime.forEach(recipe => console.log(recipe.name));

const recipesByIngredients = recipeBook.findRecipesByIngredients(["картопля", "морква"]);
console.log("Рецепти, що мають в складі моркву та картоплю:");
recipesByIngredients.forEach(recipe => console.log(recipe.name));
