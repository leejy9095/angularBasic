import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';   //입력을 위해 input 추가

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name : string = "";   //@input은 받는 역활을 의미 (앞에서 [변수]로 넘긴 값을 @input을 써서 받아온다)

  constructor() {
   }

  ngOnInit(): void {
  }
  
}
