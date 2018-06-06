import { Component, OnInit } from '@angular/core';
import { PaymentsService } from './payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  providers : [PaymentsService]
})
export class PaymentsComponent implements OnInit {

  payments : any;
  
  constructor(private paymentsservice : PaymentsService) { }

  ngOnInit() {
    this.paymentsservice.getPayments().subscribe(

      data=>{
        this.payments=data;

        console.log(this.payments);
      },
error=>{

}
    );
  

  }

}
