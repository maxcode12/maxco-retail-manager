import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category';
import { Constant } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(Constant.API_END_POINT_CATEGORY + Constant.METHODS.GET_ALL_CATEGORY);
  }

  getCategoryById(id: number){
    return this.http.get(Constant.API_END_POINT_CATEGORY + Constant.METHODS.GET_ALL_CATEGORY_BY_ID + id);
  }

  createCategory(category: Category){
    return this.http.post(Constant.API_END_POINT_CATEGORY + Constant.METHODS.POST_Create_CATEGORY, category);
  }
  
}
