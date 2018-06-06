import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers} from "@angular/http";
import { HttpHeaders, HttpClient } from "@angular/common/http";





@Injectable()
export class MyHomeservice{

    constructor(private _http :HttpClient){}

    getMyProfile() {
        return  this._http.get("/getmember");
    }

    getDuePayments() {
        return  this._http.get("/getDuesPayment");
    }




}