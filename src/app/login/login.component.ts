import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  id2 :string | undefined;
  
  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) { //constructor에서 service 호출
  }

  login(username: any, password:any): boolean {
    if (!this.authService.login(username.value, password.value)) {
      //  console.log(this.id2); 이런식으로 변수 변화 하면 html에서도 적용
      alert("잘못된 로그인 정보입니다.");      
    }
    
    username.value = '';
    password.value = '';

    this.router.navigate(['/home']); 
    
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    
    return false;
  }

}
