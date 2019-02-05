import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('A test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg'),
    new Recipe('A test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg'),
    new Recipe('A test recipe', 'Simply a test',
      'https://pinchofyum.com/wp-content/uploads/General-Tsos-Cauliflower-1-7-600x900.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
