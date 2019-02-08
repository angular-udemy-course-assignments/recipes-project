import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('pepper', 5),
    new Ingredient('tomatoes', 3)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientCreated(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
