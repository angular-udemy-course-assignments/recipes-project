import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NoRecipeSelectedComponent} from './recipes/recipe-list/no-recipe-selected/no-recipe-selected.component';

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent,
  children: [
    {path: '', component: NoRecipeSelectedComponent},
    {path: ':id', component: RecipeDetailComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
