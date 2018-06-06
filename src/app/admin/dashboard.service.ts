import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Member } from "../models/Member";







@Injectable()
export class DashboardService{

constructor(private _http : HttpClient){}


public getAllMembers (): Observable<Member[]> {

  return this._http.get<Member[]>("/getall");
}

public getMasterData (): Observable<Member[]> {

  return this._http.get<Member[]>("/getmasterdata");
}



}