import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './_pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: AdminComponent,
    children:[
      {
        path:"dashboard",
        component: AdminDashboardComponent
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
export class AdminRoutingModule { }
