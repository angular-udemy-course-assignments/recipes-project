import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingForm: NgForm;
  editSubscription: Subscription;
  selectedIndex: number;
  editMode = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.ingredientStartEdit
      .subscribe((index: number) => {
        const ingredient = this.shoppingListService.getIngredient(index);
        console.log(ingredient);
        this.editMode = true;
        this.selectedIndex = index;
        this.ingForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      });
  }

  onSubmit(control: NgForm) {
    const value = control.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.selectedIndex, newIng);
    } else {
      this.shoppingListService.addIngredient(newIng);
    }
    this.resetForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.selectedIndex);
    this.resetForm();

  }

  resetForm() {
    this.editMode = false;
    this.ingForm.reset();
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
