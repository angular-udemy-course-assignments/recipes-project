import {Component, EventEmitter, Output} from '@angular/core';
import {navigation} from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  selectedSection;
  navigation = navigation;

  @Output() navigationChanged = new EventEmitter<string>();

  constructor() {
    this.selectedSection = this.navigation[0];
  }

  changeSection(sectionName) {
    this.selectedSection = sectionName;
    this.navigationChanged.emit(this.selectedSection);
    console.log(this.selectedSection);
  }
}
