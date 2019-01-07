import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConstant } from '../AppConstant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router : Router ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(null!=localStorage.getItem(AppConstant.JWT_TOKEN))
        return true;
      else
      this._router.navigate(['home/login']);
      return false;
  }
}
