import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        console.log(params);
        this.index = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.index);
      });

  }

  addToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onRecipeDelete() {
    console.log('delete ', this.index);
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
