import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutesModule} from './auth-routes.module';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutesModule
  ]
})
export class AuthModule {

}
