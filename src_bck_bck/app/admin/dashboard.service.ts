import { Injectable } from "@angular/core";
import { Http ,Response } from "@angular/http";




@Injectable()
export class DashboardService{

constructor(private _http : Http){}

public getAllMembers(){

    return this._http.get("/getall").subscribe(data => {
        console.log("hhhh")
      },
      error => {
        console.log(JSON.stringify(error.json()));
      });
}


}