import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  email: string = '';
  createPassword: string = '';
  confirmPassword: string = '';
  showSignup: boolean = false;

  constructor(private navCtrl: NavController) {}

  validateLogin(event: Event) {
    event.preventDefault();
    // Add login validation logic here
    this.navCtrl.navigateForward('/display');
  }

  signup(event: Event) {
    event.preventDefault();
    // Add signup logic here
  }

  showSignupForm() {
    this.showSignup = true;
  }

  showLoginForm() {
    this.showSignup = false;
  }
}
