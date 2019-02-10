import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('pepper', 5),
    new Ingredient('tomatoes', 3)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
