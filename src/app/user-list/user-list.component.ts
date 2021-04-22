import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const arrayVal : Array<string> = ['data0','data1','data2']   //class 밖에서 global 하게 선언  (변수명 : 자료형)

//@Component가 선언된 것이 컴포넌트로 생성 , 그 컴포넌트에서 사용할 html, style 지정
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //변수 선언
  names: string[];  //스트링타입의 배열로 names라는 변수 생성 (변수명 : 자료향)

  loginBool = true;

  constructor() {
    this.names = ['aa', 'bb', 'cc'];

  }

  ngOnInit(): void {
  }

  public clickAfterPrint () : void{
    this._innerFunc();
    console.log(arrayVal);
  }

  private _innerFunc(){
    arrayVal.push('data' + arrayVal.length);
  }

  getEventLogin(event: any){
    console.log(event)
    this.loginBool = event;
  }

}
