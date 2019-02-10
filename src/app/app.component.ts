import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: []
})
export class AppComponent {
  selectedSection = 'Recipes';

  onNavigationChanged(selectedSection: string) {
    console.log(selectedSection);
    this.selectedSection = selectedSection;
  }
}
