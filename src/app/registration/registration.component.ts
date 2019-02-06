import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'
import { RegistrationService } from './registration.service';
import { OnlyNumberDirective } from '../utility/_directive/only-number.directive';
import { Member } from '../models/Member';

import * as $ from 'jquery';
import { LoaderService } from '../loader/loader.service';

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
   member : Member;

  ngOnInit() {
    
  }

  

  constructor(private _registrationService: RegistrationService, private loaderService: LoaderService) {
    this.member=new Member();
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
    return this._registrationService.validateAndSave(this.registrationForm.value)
    .subscribe(
      data=>{
        console.log("Registration success..")
        this.paymentSuccessFlag=true;
      },
      error=>{
        
      }
    );
  }

  

  /**
   * responsible for user registration
   * 
   * @author Sandip
	*/
  memberRegistration(formValidationStatus){
    if(!formValidationStatus){
      return false;
    }

    this.loaderService.loaderStatus=true;
    this._registrationService.validateAndSave(this.member)
    .subscribe(
      res=>{
        this.loaderService.loaderStatus=false;
        console.log(res);
      },
      err=>{
        this.loaderService.loaderStatus=false;
        console.log(err);
      }
    );

  }





}



