import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers :[DashboardService]
})
export class DashboardComponent implements OnInit {

  members=[];

  constructor(private _dashboardService : DashboardService) { }

  ngOnInit() {

    this._dashboardService.getAllMembers();
  }

}
