import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientsChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsChangedSub = this.shoppingListService.ingredientsChanged
      .subscribe((updatedIngredients: Ingredient[]) => {
        this.ingredients = updatedIngredients;
      });
  }

  onSelect(index: number) {
    this.shoppingListService.ingredientStartEdit.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSub.unsubscribe();
  }
}
