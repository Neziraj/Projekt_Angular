import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ModelTemplate } from '../Models/ModelTemplate';

import {AuthService} from "../_auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService<T extends ModelTemplate> {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  URL = 'http://localhost:49497/api/';


  get() {
    return this.http.get<T[]>(this.URL + '/?token=' + this.authService.getJwtToken());
  }

  delete(index) {
    return this.http.delete<[]>(this.URL + '/?token=' + this.authService.getJwtToken() + '&Id=' + index);
  }

  put(item: T)
  {
    return this.http.put<T>(this.URL + '?token=' + this.authService.getJwtToken(), item);
  }

  post(item: T)
  {
    return this.http.post<T>(this.URL + '?token=' + this.authService.getJwtToken(), item);
  }

  /*
  get() {
    return this.http.get<T[]>(this.URL);
  }
  put(item: T)
  {
    return this.http.put<T>(this.URL,item);
  }
  post(item: T)
  {
    return this.http.post<T>(this.URL,item);
  }
  delete(index) {
    return this.http.delete<[]>(this.URL+ index);
  }

   */


}
