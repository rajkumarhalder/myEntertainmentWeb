import { Injectable } from "@angular/core";
import { Http ,Response } from "@angular/http";

import { Router } from "@angular/router";

@Injectable()
export class RegistrationService {

    constructor(private _http: Http , private _router : Router) {
        console.log("RegistrationService Called.....");
    }

    public validateAndSave (model: any) : void{
        console.log("service called...."+model.name);
    this._http.post("/registration",model).subscribe(
        data => {
          this._router.navigate(['/admin']);
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    }


}