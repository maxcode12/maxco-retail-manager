import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constants';
import { Location } from '../entities/Location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  getLocations(){
    return this.http.get(Constant.API_END_POINT_LOCATION + Constant.METHODS.GET_ALL_LOCATION);
  }

  createLocation(location: Location){
    return this.http.post(Constant.API_END_POINT_LOCATION + Constant.METHODS.POST_Create_LOCATION, location);
  }

}
