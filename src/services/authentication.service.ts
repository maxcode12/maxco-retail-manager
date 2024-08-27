import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateDto } from '../dtos/authentication/authenticateDto';
import { Constant } from './constant/constants';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { response } from 'express';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private readonly JWT_TOKEN =  'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient) {
   }

 loginPost(credentials: AuthenticateDto) : Observable<any> {
  debugger;
    return this.http
    .post(Constant.API_END_POINT_AUTH + 
      Constant.METHODS.POST_LOGIN, credentials)
    .pipe(tap((response: any) => 
      this.doLoginUser(credentials.email, credentials.password, response.accessToken)));
  }

  private doLoginUser(email: string, password:string, response: any) {
    if (response && response.accessToken) {
        this.loggedUser = email;
        this.storeJwtTokens(response.accessToken);
        this.isAuthenticatedSubject.next(true);
    }else{
      this.isAuthenticatedSubject.next(false);
      console.log('Error: No token found');
    }
  }

  private storeJwtTokens(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn() {
    return this.isAuthenticatedSubject.asObservable();
  }
}
