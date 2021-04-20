import { Component } from '@angular/core';  //import {things} from wherever 형식의 구조

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstStudy';

  constructor (){  
    //constructor 라는 함수를 추가합니다.
    //constructor는 생성자의 의미로 최초 단 1번만 클래스파일이 생성 될 때 동작하는 함수
    console.log('firstStudy 시작');
  }

}
