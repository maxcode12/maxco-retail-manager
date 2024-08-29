import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './constant/constants';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticateDto } from '../dtos/authentication/authenticateDto';
import {jwtDecode} from 'jwt-decode'; // Import the jwtDecode function

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private readonly JWT_TOKEN =  'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  private http = inject(HttpClient);
  private router = inject(Router);
  constructor() {}

 loginPost(credentials: AuthenticateDto) : Observable<any> {
  
    return this.http
    .post(Constant.API_END_POINT_AUTH + 
      Constant.METHODS.POST_LOGIN, credentials)
      .pipe(tap((tokens: any)=> 
        this.doLoginUser(credentials.email, JSON.stringify(tokens))));
  }

  private doLoginUser(email: string, token: any) {
    this.loggedUser = email;
    this.storeJwtTokens(token);
    this.isAuthenticatedSubject.next(true);
  }


  private storeJwtTokens(jwt: string) {
    alert(jwt);
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  getCurrentAuthUser() {
    return this.http.get(Constant.API_END_POINT_AUTH + 
      Constant.METHODS.GET_USER_PROFILE);
    
  }

  isTokenExpired() {
    const tokens = localStorage.getItem(this.JWT_TOKEN);
    if (!tokens) return true;
    const token = JSON.parse(tokens).access_token;
    const decoded = jwtDecode(token);
    if (!decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate < now;
  }

  refreshToken() {
    let tokens: any = localStorage.getItem(this.JWT_TOKEN);
    if (!tokens) return null;
    tokens = JSON.parse(tokens);
    let refreshToken = tokens.refresh_token;
    return this.http
      .post<any>(Constant.API_END_POINT_AUTH + Constant.METHODS.POST_REFRESH_TOKEN, {
        refreshToken,
      })
      .pipe(tap((tokens: any) => this.storeJwtTokens(JSON.stringify(tokens))));
  }

  isLoggedIn() {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }

}


