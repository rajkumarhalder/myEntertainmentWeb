
import { error } from "util";
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class LoginService { 
    
    constructor(private _http: HttpClient) { }

    public executeLogin(model: any) {
    console.log(model);
        return this._http.post("/login", model);
    }

}