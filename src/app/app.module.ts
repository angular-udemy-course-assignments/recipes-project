import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipeService} from './recipes/recipe.service';
import {HttpModule} from '@angular/http';
import {DataStorageService} from './shared/data-storage.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpModule
  ],
  providers: [RecipeService, DataStorageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
