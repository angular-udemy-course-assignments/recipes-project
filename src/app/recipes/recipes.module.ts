import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {NoRecipeSelectedComponent} from './recipe-list/no-recipe-selected/no-recipe-selected.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesComponent} from './recipes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NoRecipeSelectedComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {
}
