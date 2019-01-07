import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../admin/dashboard.service';
import { PaymentsService } from '../../payments/payments.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
  providers :[DashboardService,PaymentsService]
})
export class StatisticComponent implements OnInit {

  public masterdata :any;
  public listOfExpanditur :any;

  constructor(private _dashboardService :DashboardService,private _paymentsService : PaymentsService) { }

  ngOnInit() {
    

    this._dashboardService.getMasterData().subscribe(
      data => {
        this.masterdata = data;
      },
      error => {
  
      });


    this._paymentsService.getExpanditur().subscribe(
      data=>{
    this.listOfExpanditur=data;
    },error=>{
    
    });
  }

}
