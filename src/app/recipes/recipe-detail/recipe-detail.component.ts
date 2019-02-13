import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        console.log(params);
        const id = +params['id'];
        this.recipe = this.recipeService.getRecipe(id);
      });
  }

  addToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }


}
