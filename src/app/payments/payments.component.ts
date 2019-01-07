import { Component, OnInit } from '@angular/core';
import { PaymentsService } from './payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  providers : [PaymentsService]
})
export class PaymentsComponent implements OnInit {



  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  payments : any=[];
  
  totalAmount : Number=0;
  currentFundBalance : any;
  constructor(private paymentsservice : PaymentsService) { }

  ngOnInit() {
    this.paymentsservice.getPayments().subscribe(

      data=>{
        this.payments=data;

        this.payments.forEach(payment => {
          if(payment.amount!='N/A' && payment.amount!='--'){
         
            var value=parseInt(payment.amount)
          this.totalAmount=+this.totalAmount+value;
          console.log(payment.amount);
          }
          
        });

        console.log(this.payments);
      },
error=>{

}
    );
  

    this.currentFundBalance=this.paymentsservice.getFundBalance().subscribe(data=>{

this.currentFundBalance=data;
    },error=>{
      
    })

  }

  

}
