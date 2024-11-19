import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-display',
  templateUrl: 'display.page.html',
  styleUrls: ['display.page.scss'],
})
export class DisplayPage {
  formData: any = {
    lastname: 'Doe',
    suffix: 'Jr.',
    firstname: 'John',
    middleInitial: 'M',
    birthdate: '1990-01-01',
    gender: 'Male',
    age: '30',
    maritalStatus: 'Single',
    ethnicity: 'Asian',
    currentAddress: '123 Main St',
    permanentAddress: '456 Maple Ave',
    mobileNumber: '123-456-7890',
    homePhone: '098-765-4321',
    email: 'john.doe@example.com',
    socialMedia: 'https://facebook.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
    // other formData fields here...
  };

  constructor(private navCtrl: NavController) {}

  edit() {
    this.navCtrl.navigateForward('/registration');
  }

  goBackToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
