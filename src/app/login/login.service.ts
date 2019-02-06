
import { error } from "util";
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../api.service";

import { map, catchError } from 'rxjs/operators';
import { AppConstant } from "../AppConstant";



@Injectable()
export class LoginService { 
    
    constructor(private _http: HttpClient, private api : ApiService) { }

    public executeLogin(model: any) {
        return this.api.postRequest(AppConstant.URL_LOGIN, model)
        .pipe(
            map((res: Response)=>{
                return res;
            }),
            catchError((err : any) => {
              return err;
            })
        );
    }

}