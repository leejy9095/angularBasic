import { Injectable } from '@angular/core';
import { loginItemService } from '../service/loginItemService';

@Injectable()
export class AuthService {    //서비스라서 공통으로 사용되는 함수들만 작성

  constructor(private loginItemData : loginItemService) { //private 제어자를 붙여서 클래스 내부에서 사용가능하게 합니다.
    console.log(loginItemData);
  }

  login(user: string, password: string): boolean {

    if (user === this.loginItemData.loginItemData['id'] && password === this.loginItemData.loginItemData['pw']) { //private로 선언해줘서 여기서 사용할수가 있다
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
