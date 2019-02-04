import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class RegistrationService {

    constructor(private _http: HttpClient, private _router: Router) {
        console.log("RegistrationService Called.....");
    }


    

    public validateAndSave(model: any) {
        console.log("service called...." + model);
        return this._http.post("/registration", model)

    }


    public updateProfileByMember(model: any) {
        console.log("service called...." + model);
        return this._http.post("/updateprofilebymeber", model).subscribe(
            data => {
                console.log("success");
            },
            error => {
                console.log("error");
            }
        );
    }


}