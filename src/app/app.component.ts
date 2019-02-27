import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDxvcoByDUHTNbDzVoHMl2m5-NzBA2d0k',
      authDomain: 'recipes-proj-c332e.firebaseapp.com',
    });
  }
}
