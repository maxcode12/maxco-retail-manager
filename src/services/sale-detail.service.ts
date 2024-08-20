import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constants';
@Injectable({
  providedIn: 'root'
})
export class SaleDetailService {

  constructor(private http:HttpClient) { }
  getSaleDetails(){
    return this.http.get(Constant.API_END_POINT_SALESDETAILS + Constant.METHODS.GET_ALL_SALESDETAILS);
  }
  getSaleDetailById(id: number){
    return this.http.get(Constant.API_END_POINT_SALESDETAILS + Constant.METHODS.GET_ALL_SALESDETAILS_BY_ID + id);
  }
  
}
