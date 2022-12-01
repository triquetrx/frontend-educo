import { Component } from '@angular/core';
import { LoginDetails } from './LoginDetails';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  submitLogin(data: LoginDetails) {
    console.log(data);
    //Enter your post request logic
  }
}
