import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataService: DataStorageService,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  private onSaveData() {
    this.dataService.storeRecipes()
      .subscribe((response: any) => console.log('stored ', response));
  }

  private onFetchData() {
    this.dataService.getRecipes()
      .subscribe((recipes: any[]) => {
        console.log('fetched ', recipes);
        this.recipeService.setRecipes(recipes);
      });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
