import {Component, EventEmitter, Output} from '@angular/core';
import {navigation} from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  navigation = navigation;

  @Output() navigationChanged = new EventEmitter<string>();

  constructor() {
  }

  changeSection(sectionName) {
    this.navigationChanged.emit(sectionName);
  }
}
