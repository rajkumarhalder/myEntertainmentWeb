import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'
import { RegistrationService } from './registration.service';

import * as $ from 'jquery';

/* declare var jquery:any;
declare var $ :any; */



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers :[RegistrationService]
})
export class RegistrationComponent implements OnInit{

  public paymentSuccessFlag : boolean =false;
  ngOnInit() {
    
  }

  

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
    return this._registrationService.validateAndSave(this.registrationForm.value).subscribe(
      data=>{
        console.log("Registration success..")
        this.paymentSuccessFlag=true;
      },
      error=>{
        
      }
    );
  }





}



