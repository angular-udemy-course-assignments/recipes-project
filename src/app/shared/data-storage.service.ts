import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://recipes-proj-c332e.firebaseio.com/recipes.json?auth=';

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(this.url + token, this.recipeService.getRecipes())
      .pipe(
        map(((response: Response) => response.json())
        ));
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(this.url + token)
      .pipe(
        map((response: Response) => {
            const recipes: Recipe[] = response.json();
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
