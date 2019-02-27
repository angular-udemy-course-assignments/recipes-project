import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'Simply a test',
      'https://www.cityline.tv/wp-content/uploads/2017/12/salmon-and-vegetables-plate.jpg',
      [new Ingredient('meat', 1),
        new Ingredient('salad', 5)]
    ),
    new Recipe('Another test recipe',
      'Again a test',
      'https://www.cityline.tv/wp-content/uploads/2017/12/salmon-and-vegetables-plate.jpg',
      [new Ingredient('tomatoes', 2),
        new Ingredient('buns', 3)]),
    // new Recipe('Third test recipe',
    //   'Simply a test',
    //   'https://www.cityline.tv/wp-content/uploads/2017/12/salmon-and-vegetables-plate.jpg',
    //   [new Ingredient('steak', 1),
    //     new Ingredient('carrots', 5)])
  ];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyChange();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.notifyChange();
  }

  getRecipes(): Recipe[] {
    // return a copy of the array
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.notifyChange();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.notifyChange();
  }

  private notifyChange() {
    this.recipeChanged.next(this.recipes);
  }
}

