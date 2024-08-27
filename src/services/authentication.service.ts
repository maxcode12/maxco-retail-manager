import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateDto } from '../dtos/authentication/authenticateDto';
import { Constant } from './constant/constants';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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
    return this.http
    .post(Constant.API_END_POINT_AUTH + 
      Constant.METHODS.POST_LOGIN, credentials)
    .pipe(tap((token: any) => 
      this.doLoginUser(credentials.username, token.jwtAccessToken)));
  }

  private doLoginUser(username: string, token: any) {
    this.loggedUser = username;
    this.storeJwtTokens(token.jwtAccessToken);
    this.isAuthenticatedSubject.next(true);
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
