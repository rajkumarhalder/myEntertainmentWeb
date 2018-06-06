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

  public isRegistrationSuccess = false;

  constructor(private _registrationService: RegistrationService) {
    console.log("RegistrationComponent called....")
  }

  
  registrationForm = new FormGroup({

    name: new FormControl(),
    password: new FormControl(),
    emailId: new FormControl(),
    deskPhoneNumber: new FormControl(),
    mobileNumber: new FormControl(),
    dateOfBirth: new FormControl()
  });

 

  onRegistration() {
    console.log(this.registrationForm.value);
    this._registrationService.validateAndSave(this.registrationForm.value).subscribe(
      (data : any)=>{
        console.log("Registration success..")
        this.isRegistrationSuccess=true;
      },
      error=>{
        
      }
    );
  }

}
