import { Injectable } from "@angular/core";

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConstant } from './AppConstant';

@Injectable()
export class AuthIntercepter implements HttpInterceptor{


intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  console.log("intercept");
  //const url = 'http://172.16.16.51:8080';
  //const url = 'http://localhost:8080';
  const url = 'http://localhost:8082/myEntertainmentService';

  if(localStorage.getItem(AppConstant.JWT_TOKEN) !=null){
    req = req.clone({
      url: url + req.url,
      setHeaders: {
        Authorization: localStorage.getItem(AppConstant.JWT_TOKEN)
      }
      
    });
  }
  else{
    req = req.clone({
      url: url + req.url,
    });
  }

  return next.handle(req);
}
}