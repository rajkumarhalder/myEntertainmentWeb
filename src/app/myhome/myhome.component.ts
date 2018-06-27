import { Component, OnInit } from '@angular/core';
import { MyHomeservice } from './myhome.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css'],
  providers :[MyHomeservice]
})
export class MyHomeComponent implements OnInit {

   userDetail : any;
   public adminFlag=false;

   paymentsDue :any;

   notification :any;


  constructor(private _myHomeService : MyHomeservice,private _route : Router,private toastr: ToastrService) { }

  ngOnInit() {

   this._myHomeService.getMyProfile().subscribe(
    data =>{
      this.userDetail=data;

      if(null !=this.userDetail.roleId && this.userDetail.roleId==1)
      this.adminFlag=true;
    console.log(data);
    },
    error=>{
    console.log("something went wrong...")
    }

   );

   this._myHomeService.getDuePayments().subscribe(data=>{
    this.paymentsDue=data;

    if(this.paymentsDue!="undefined" && this.paymentsDue.length>0){
      this.toastr.info("Your Payment is Due..Please make payment","Payment Due");
    }
  else{
    this.toastr.info("Hi,Have a great day...")
  }
   },
  error=>{


  });
  
  this._myHomeService.getNotifications().subscribe(data=>{
this.notification=data;

console.log(this.notification)
  }),
  error=>{

  }
   
  }

  logout(){
    localStorage.removeItem("accessToken");
    this._route.navigate(['home/home/login']);
  }

}
