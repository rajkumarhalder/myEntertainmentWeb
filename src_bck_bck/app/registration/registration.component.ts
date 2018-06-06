import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers :[RegistrationService]
})
export class RegistrationComponent {


  constructor(private _registrationService: RegistrationService) {
    console.log("RegistrationComponent called....")
  }

  loginForm = new FormGroup({

    userName: new FormControl(),
    passWord: new FormControl()

  });

  registrationForm = new FormGroup({

    name: new FormControl(),
    domainName: new FormControl(),
    emailId: new FormControl(),
    deskPhoneNumber: new FormControl(),
    mobileNumber: new FormControl(),
    dateOfBirth: new FormControl()
  });

  onLogin() {
    console.log(this.loginForm.value);
  }

  onRegistration() {
    console.log(this.registrationForm.value);
    this._registrationService.validateAndSave(this.registrationForm.value);
  }

}
