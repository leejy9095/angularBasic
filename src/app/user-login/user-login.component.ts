import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  visible : boolean = true;

  id : string = "";
  pwd : string = "";  

  @Output() sendEvent : EventEmitter<any> = new EventEmitter();  //보내는 역할


  constructor() { }

  ngOnInit(): void {
  }

  tryToLogin() : void{
    if(this.id =='admin' && this.pwd == '1'){
      this.visible = true;
    } else {
      this.visible = false;
    }
    console.log(this.id, this.pwd, this.visible);    

    //Outpud의 EventEmitter 클래스의 emit 기능을 이용해서 데이터를 상위 컴포넌트로 전달
    this.sendEvent.emit(this.visible);
  }


}
