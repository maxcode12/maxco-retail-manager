import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constants';
@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  getSales(){
    return this.http.get(Constant.API_END_POINT_SALES + Constant.METHODS.GET_ALL_SALES);
  }
  getSaleById(id: number){
    return this.http.get(Constant.API_END_POINT_SALES + Constant.METHODS.GET_ALL_SALES_BY_ID + id);
  }

  createSale(sale: any){
    return this.http.post(Constant.API_END_POINT_SALES + Constant.METHODS.POST_Create_SALES, sale);
  }

  updateSale(sale: any){
    return this.http.put(Constant.API_END_POINT_SALES + Constant.METHODS.PUT_UPDATE_SALES, sale);
  }
}
