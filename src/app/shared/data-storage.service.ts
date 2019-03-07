import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://recipes-proj-c332e.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.httpClient.put(this.url, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>(this.url)
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
