import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg'),
    new Recipe('Another test recipe', 'Again a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg'),
    new Recipe('Third test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg')
  ];

  getRecipes(): Recipe[] {
    // return a copy of the array
    return this.recipes.slice();
  }
}

