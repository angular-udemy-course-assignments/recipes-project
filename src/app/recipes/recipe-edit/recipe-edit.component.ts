import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormControlName, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.less']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  id: number;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initForm() {
    let recipeName = '';
    let imageUrl = '';
    let description = '';
    const ingredients = new FormArray([]);

    if (this.editMode) {
      const editRecipe = this.recipeService.getRecipe(this.id);
      console.log(this.id, editRecipe);
      recipeName = editRecipe.name;
      imageUrl = editRecipe.imagePath;
      description = editRecipe.description;

      editRecipe.ingredients
        .forEach((ing) => {
          const ingGroup = new FormGroup({
            'name': new FormControl(ing.name),
            'amount': new FormControl(ing.amount)
          });
          ingredients.push(ingGroup);
        });
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imageUrl': new FormControl(imageUrl),
      'description': new FormControl(description),
      'ingredients': ingredients
    });
  }
}
