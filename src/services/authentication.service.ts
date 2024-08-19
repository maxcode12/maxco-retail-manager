import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateDto } from '../dtos/authentication/authenticateDto';
import { Constant } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(private http: HttpClient) {
   
   }

  // postLogin(){
  //   return this.http.post(Constant.API_END_POINT + Constant.METHODS.POST, null);
  // }


}
