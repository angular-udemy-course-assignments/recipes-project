import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg'),
    new Recipe('Another test recipe', 'Again a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg'),
    new Recipe('Third test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
