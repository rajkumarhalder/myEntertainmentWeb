import { Injectable } from "@angular/core";

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{


intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  console.log("intercept");
  const url = 'http://172.16.7.29:8080';

  if(localStorage.getItem('accessToken') !=null){
    req = req.clone({
      url: url + req.url,
      setHeaders: {
        Authorization: localStorage.getItem('accessToken')
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