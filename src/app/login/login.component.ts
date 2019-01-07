import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


import { LoaderService } from '../loader/loader.service';//loader service
import { AppConstant } from '../AppConstant';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  public isLoginFail=false;

  constructor(private _loginService: LoginService, private _router: Router, public loaderService : LoaderService) { }

  loginForm = new FormGroup(
    {
      userName: new FormControl(),
      passWord: new FormControl()
    }
  );


  /*
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		RESPONSIBLE FOR USER LOGIN
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	*/
  onLogin() {
    this.loaderService.loaderStatus=true;//display loader
    this._loginService.executeLogin(this.loginForm.value).subscribe(
      (data :any) => {
        if(data.status){//login success
          localStorage.setItem(AppConstant.JWT_TOKEN,data.data.accessToken);//set jwt to local storage
          localStorage.setItem(AppConstant.CURRENT_USER_ROLE,data.data.roleId);//set user role id to local storage
          this._router.navigate(['myhome/myprofile']);//navigate user to home page
        }
        else{//login failed
          this.isLoginFail=true;
        }
      this.loaderService.loaderStatus=false;//hide loader
      },
      error => {
        console.log(error);
        this.isLoginFail=true;
        this.loaderService.loaderStatus=false;
      }
    );
  }

  

}
