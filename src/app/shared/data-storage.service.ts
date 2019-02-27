import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {RecipeService} from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://recipes-proj-c332e.firebaseio.com/recipes.json';

  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put(this.url, this.recipeService.getRecipes())
      .pipe(
        map(((response: Response) => response.json())
        ));
  }
}
