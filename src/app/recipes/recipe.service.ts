import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1, 'A test recipe',
      'Simply a test',
      'https://www.cityline.tv/wp-content/uploads/2017/12/salmon-and-vegetables-plate.jpg',
      [new Ingredient('meat', 1),
        new Ingredient('salad', 5)]
    ),
    new Recipe(2, 'Another test recipe',
      'Again a test',
      'https://www.cityline.tv/wp-content/uploads/2017/12/salmon-and-vegetables-plate.jpg',
      [new Ingredient('tomatoes', 2),
        new Ingredient('buns', 3)]),
    new Recipe(3, 'Third test recipe',
      'Simply a test',
      'https://www.cityline.tv/wp-content/uploads/2017/12/salmon-and-vegetables-plate.jpg',
      [new Ingredient('steak', 1),
        new Ingredient('carrots', 5)])
  ];

  getRecipes(): Recipe[] {
    // return a copy of the array
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find(r => r.id === id);
  }

}

