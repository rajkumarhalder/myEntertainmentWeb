import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './admin/dashboard.component';
import { HomepageComponent } from './home/homepage.component';
import {RouterModule,Routes} from '@angular/router'

const appRoutes :Routes =[
{path : 'home', component : HomepageComponent},
{path : 'registration', component : RegistrationComponent},
{path : 'admin', component : DashboardComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
