import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../api.service";
import { map, catchError } from "rxjs/operators";
import { AppConstant } from "../AppConstant";



@Injectable()
export class RegistrationService {

    constructor(private api: ApiService) {
        console.log("RegistrationService Called.....");
    }


    

    public validateAndSave(model: any) {
        return this.api.postRequest(AppConstant.URL_REGISTRATION, model)
        .pipe(
            map(res=>{
                return res;
            }),
            catchError((err: any)=>{
                return err;
            })
        );
    }


    public updateProfileByMember(model: any) {
        /* console.log("service called...." + model);
        return this._http.post("/updateprofilebymeber", model).subscribe(
            data => {
                console.log("success");
            },
            error => {
                console.log("error");
            }
        ); */
    }


}