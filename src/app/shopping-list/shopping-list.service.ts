import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('pepper', 5),
    new Ingredient('tomatoes', 3)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientStartEdit = new Subject<number>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.notifyChange();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients); // or push(...ingredients)
    this.notifyChange();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.notifyChange();
  }

  private notifyChange(): void {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(indexToUpdate: number, ingredient: Ingredient) {
    this.ingredients[indexToUpdate] = ingredient;
    this.notifyChange();
  }
}
