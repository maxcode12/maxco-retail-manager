import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Constant } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(Constant.API_END_POINT_PRODUCT + Constant.METHODS.GET_ALL_PRODUCT);
  }
  getProductById(id: number){
    return this.http.get(Constant.API_END_POINT_PRODUCT + Constant.METHODS.GET_ALL_PRODUCT_BY_ID + id);
  }

  createProduct(product: Product){
    return this.http.post(Constant.API_END_POINT_PRODUCT + Constant.METHODS.POST_Create_PRODUCT, product);
  }

  updateProduct(product: Product){
    return this.http.put(Constant.API_END_POINT_PRODUCT + Constant.METHODS.PUT_UPDATE_PRODUCT, product);
  }
}
