import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private route: Router) {
  }

  signupUser(email: string, password: string) {
    console.log('registering ', email, password);
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        return response.user.getIdToken();
      })
      .then(token => {
        this.token = token;
        this.route.navigate(['/']);
        console.log(this.token);
      })
      .catch(error => console.log(error));
  }

  getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token = token)
      .catch(error => console.log(error));

    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    firebase.auth()
      .signOut()
      .then(() => this.route.navigate(['/']));
    this.token = null;
  }
}
