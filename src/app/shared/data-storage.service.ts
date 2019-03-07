import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://recipes-proj-c332e.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(this.url, this.recipeService.getRecipes(), {
      params: new HttpParams().append('token', token)
    });
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>(this.url, {
      params: new HttpParams().append('token', token)
    })
      .pipe(
        map((recipes) => {
            for (const r of recipes) {
              if (!r['ingredients']) {
                r.ingredients = [];
              }
            }
            return recipes;
          }
        ));
  }
}
