import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  public isLoginFail=false;

  constructor(private _loginService: LoginService, private _router: Router) { }

  loginForm = new FormGroup({

    userName: new FormControl(),
    passWord: new FormControl()

  });


  onLogin() {
    this._loginService.executeLogin(this.loginForm.value).subscribe(
      (data :any) => {
      localStorage.setItem("accessToken",data.accessToken);
      localStorage.setItem("roleId",data.roleId)
      this._router.navigate(['myhome/myprofile']);
      },
      error => {
        this.isLoginFail=true;
        console.log(error);
      }
    );
  }

  

}
