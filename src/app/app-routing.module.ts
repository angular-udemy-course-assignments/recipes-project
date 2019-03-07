import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule',
    // canLoad: [AuthGuardService]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
