/* tslint:disble max-line-length */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    //가드 파일에서 정의된 기능은 app-module의 Router 구성에서 개채로 제공된다 그래서 canActivate: [ LoggedInGuard ] 이런식으로 사용
    //appmodule에서 guard와 canActiovate를 추가해서 참이면 동작
      const isLoggedIn = this.authService.isLoggedIn();
      console.log('canActivate', isLoggedIn);
      return isLoggedIn;
  }
}
