import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateDto } from '../dtos/authentication/authenticateDto';
import { Constant } from './constant/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private url = 'https://localhost:7064/api/Auth/login';
  
  constructor(private http: HttpClient) {
   }

 loginPost(credentials: AuthenticateDto) : Observable<any> {
    return this.http.post(this.url, credentials);
  }
}
