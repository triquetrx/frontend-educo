import { Component } from '@angular/core';
import { SignupData } from './SignupData';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  createNewAccount(e: SignupData): void {
    console.log(e);
    //Add your logic for post request
  }
}
