import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UtilityModule
  ],
  declarations: [UserComponent, DashboardComponent]
})
export class UserModule { }
