import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError, from} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  
  getRequest(url : string, apiType: any): Observable<any> {
    return this.http.get(url)
    .pipe(
      map((res)=>{ 
        return res;
      }),
      catchError(error => {
        alert(error.statusText)
        return Observable.throw(error);
        //return error;
      })
    );
  }


  postRequest(url, reqObj: any, apiType: any): Observable<any>{
    return this.http.post(url,reqObj)
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
