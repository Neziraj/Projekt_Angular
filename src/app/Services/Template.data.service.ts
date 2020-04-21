import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../Models/Admin.model';
import {Configuration} from '../Models/Config.model';

@Injectable({
  providedIn: 'root'
})

  export class TemplateDataService {
  constructor(private http: HttpClient) {
  }

  URL = 'http://localhost:49497/api/';

  get() {
    return this.http.get<[]>(this.URL);
  }
/*
  post() {
  return this.http.post<[]>(this.URL);
  }

  put() {
    return this.http.put<[]>(this.URL);
  }
*/
  delete() {
    return this.http.delete<[]>(this.URL);
  }

}
