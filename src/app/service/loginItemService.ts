import { Injectable } from '@angular/core';
import { loginItem } from '../model/loginItem';

@Injectable({
  providedIn: 'root'
})
export class loginItemService {

  public readonly loginItemData : loginItem = {  //내가 전달할 데이터
    id : 'zxc',
    pw : '123',
  };

  constructor() { 

  }
}