import { Component, OnInit, Input } from '@angular/core';   //입력을 위해 input 추가

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name : string = "";   //input 받는 변수 추가


  constructor() { }

  ngOnInit(): void {
  }

}
