import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import {
  RouterModule,
  Routes
} from '@angular/router'    //라우터 사용위해 모듈 추가

import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';   //라우터 설정 추가

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';
//import { TrackComponent } from './track/track.component';

import { AUTH_PROVIDERS } from './service/auth.service';
import { LoggedInGuard } from './service/logged-in.guard';

//FormsModule에서 주로 사용하게 될 ngModel 디렉티브는 데이터를 input 형식의 테그에 묶어줄 때 사용되어집니다(user-list.component.html 참고)

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [ LoggedInGuard ]},
  { path: 'about', component: AboutComponent , canActivate: [ LoggedInGuard ]},
  { path: 'search', component: SearchComponent , canActivate: [ LoggedInGuard ]},
  { path: 'albums/:id', component: AlbumComponent , canActivate: [ LoggedInGuard ]},

  // authentication
  { path: 'login', component: LoginComponent },

  // child  (여기 이런식으로 작성해놓고 Products.ts 에다가 다시 위에한거처럼 작성해준다)
  //{ path: 'products', component: ProductsComponent, children: childRoutes }

];
//예를 들어 /artists/13 으로 전달하면 id에 parameter로 13이 들어온다

//AlbumComponent,
//ArtistComponent,  
//TrackComponent


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    UserLoginComponent,
    SearchComponent,
    AlbumComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // 라우트 사용하기 위해 임포트
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
//bootstrap은 가장 먼저 동작할 컴포넌트
//APP_BASE_HREF를 이용하여 기본 URL 설정 
//Hash를 기반으로하는 경로 설정으로 set 다른거로는 pathLocationStrategy 도 있다

export class AppModule { }
