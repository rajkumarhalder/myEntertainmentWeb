import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Member } from '../models/Member';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentsService } from '../payments/payments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService,PaymentsService]
})
export class DashboardComponent implements OnInit {

  public paymentSuccessFlag : boolean =false;

  paymentForm = new FormGroup({

    memberId: new FormControl(),
    monthId: new FormControl(),
    amount: new FormControl(),
    updatedBy: new FormControl()

  });



  members: Member[];
  masterdata: any[];

  constructor(private _dashboardService: DashboardService,private _paymentService : PaymentsService) { }

  ngOnInit() {
    this._dashboardService.getAllMembers().subscribe(members => this.members = members);

    this._dashboardService.getMasterData().subscribe(
      data => {
        this.masterdata = data;
      },
      error => {

      }

    );
  }

  makePayment(){
    console.log(this.paymentForm.value);
     this._paymentService.updatePayment(this.paymentForm.value).subscribe(
       data=>{
        this.paymentSuccessFlag=true;
console.log('success');
       },
       error=>{

       }
     )

  }

}
