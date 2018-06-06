import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';



import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './admin/dashboard.component';
import { HomepageComponent } from './home/homepage.component';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarousalComponent } from './carousal/carousal.component';
import { MyHomeComponent } from './myhome/myhome.component';
import { Token } from '@angular/compiler';

import { MyHomeservice } from './myhome/myhome.service';
import { AuthIntercepter } from './auth.intercepter';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PaymentsComponent } from './payments/payments.component';
import { AuthGuard } from './auth/auth.guard';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AboutUs } from './aboutus/aboutus.component';
import { NewRegistration } from './aboutus/newregistration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';



const appRoutes :Routes =[
{path : "",redirectTo : 'home/login',pathMatch : 'full'},
{path : 'home', component : HomepageComponent,children : [
{path : 'login', component : LoginComponent},
{path : 'aboutus', component : AboutUs},
{path : 'newregistration', component : NewRegistration}
  
]},
{path : 'myhome', component : MyHomeComponent,canActivate : [AuthGuard],children : [
  {path : 'registration', component : RegistrationComponent},
  {path : 'myprofile' ,component : MyprofileComponent},
  {path : 'payments' ,component : PaymentsComponent},
  {path : 'admin' ,component : DashboardComponent},
  {path : 'carousal', component : CarousalComponent}
]}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    HomepageComponent,
    LoginComponent,
    MyHomeComponent,
    CarousalComponent,
    MyprofileComponent,
    PaymentsComponent,
    AboutUs,
    NewRegistration
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpModule,HttpClientModule,
    RouterModule.forRoot(appRoutes),FormsModule,BsDatepickerModule.forRoot(),ToastrModule.forRoot(),
    BrowserAnimationsModule,Ng2CarouselamosModule
  ],
  providers: [{  provide: HTTP_INTERCEPTORS,
                 useClass: AuthIntercepter,
                 multi: true },AuthGuard
              ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
