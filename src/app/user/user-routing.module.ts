import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: UserComponent,
    children:[
      {
        path:"dashboard",
        component: DashboardComponent
      },
      {
        path:"",
        redirectTo:"dashboard"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
