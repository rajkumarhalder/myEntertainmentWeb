import { Component, OnInit } from '@angular/core';
import { MyHomeservice } from '../myhome/myhome.service';
import { DashboardService } from '../admin/dashboard.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService } from '../registration/registration.service';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers :[DashboardService,RegistrationService]
})


export class MyprofileComponent implements OnInit {

  userDetail : any;
  masterdata : any;

  public profileUpdatedFlag=false;
  

  constructor(private _myHomeService : MyHomeservice,private _dashboardService : DashboardService,private _registrationService : RegistrationService) { }

  ngOnInit() {

    this._myHomeService.getMyProfile().subscribe(
     data =>{
       this.userDetail=data;

       if(null == this.userDetail.dateOfBirth){
        this.userDetail.dateOfBirth=new Date();
       }
       else{
        this.userDetail.dateOfBirth=new Date(this.userDetail.dateOfBirth);
       }
      
     console.log(data);
     },
     error=>{
     console.log("something went wrong...")
     }
 
    );

    this._dashboardService.getMasterData().subscribe(
      data => {
        this.masterdata = data;
      },
      error => {

      }

    );
   }

   onProfileUpdate(userDetail)
     {
      this._registrationService.updateProfileByMember(userDetail);
      this.profileUpdatedFlag=true;
     }
   
  
}
