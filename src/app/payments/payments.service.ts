import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class PaymentsService{

    

constructor(private _http : HttpClient){


}


getPayments(){
return this._http.get("/getpayments");
}

updatePayment(model){
    return this._http.post("/makepayment",model);
    }


}