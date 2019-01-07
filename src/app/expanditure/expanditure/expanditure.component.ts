import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../../admin/dashboard.service';
import { PaymentsService } from '../../payments/payments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expanditure',
  templateUrl: './expanditure.component.html',
  styleUrls: ['./expanditure.component.css'],
  providers : [DashboardService,PaymentsService]
})
export class ExpanditureComponent implements OnInit {

  private masterdata : any;
  private purposeList:String[];
  private listOfExpanditur :any;



  expanditureForm = new FormGroup({

    monthId: new FormControl(),
    amount: new FormControl(),
    purpose: new FormControl(),
    shortDesc: new FormControl()

  });

  constructor(private _dashboardService : DashboardService,private _paymentsService: PaymentsService,private _router :Router) { }

  ngOnInit() {

    this._dashboardService.getMasterData().subscribe(
      data => {
        this.masterdata = data;
      },
      error => {
  
      });

    this.purposeList= new Array(4);  
    this.purposeList[0] = 'Birthday Celebration';
    this.purposeList[1] = 'Farewell';
    this.purposeList[2] = 'Snaks Party';
    this.purposeList[3] = 'Team Lunch';
    this.purposeList[4] = 'Team Outing';


    this._paymentsService.getExpanditur().subscribe(
      data=>{
    this.listOfExpanditur=data;
    },error=>{
    
    });
  }

  public makeexpanditureUpdate(){
console.log(this.expanditureForm.value)

this._paymentsService.updateExpanditur(this.expanditureForm.value).subscribe(
  data=>{
    console.log("JJJJJJJJJJJJJJJJJJJJJJJ")
    this._paymentsService.getExpanditur().subscribe(
      data=>{
    this.listOfExpanditur=data;
    },error=>{
    
    });
},error=>{

});


  }


}
