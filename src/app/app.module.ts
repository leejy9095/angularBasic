import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import {FormsModule} from '@angular/forms';   //FormsModule에서 주로 사용하게 될 ngModel 디렉티브는 데이터를 input 형식의 테그에 묶어줄 때 사용되어집니다(user-list.component.html 참고)

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//bootstrap은 가장 먼저 동작할 컴포넌트

export class AppModule { }
