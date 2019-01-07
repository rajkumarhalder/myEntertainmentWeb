import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class PaymentsService{

    

constructor(private _http : HttpClient){


}


getPayments(){
return this._http.get("/getpayments");
}

getFundBalance(){
    return this._http.get("/getFundBalance");
    }

updatePayment(model){
    return this._http.post("/makepayment",model);
    }

    updateExpanditur(model){
        return this._http.post("/updateexpanditure",model);
    }

    getExpanditur() {
        return this._http.get("/getAllExpanditur");
    }

}