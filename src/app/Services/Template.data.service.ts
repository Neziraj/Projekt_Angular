import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelTemplate } from '../Models/ModelTemplate';

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService<T extends ModelTemplate> {
  constructor(private http: HttpClient) {
  }

  URL = 'http://localhost:49497/api/';

  get() {
    return this.http.get<[]>(this.URL);
  }

  delete(index) {
    return this.http.delete<[]>(this.URL + index);
  }

  put(item: T) 
  {
    return this.http.put<T>(this.URL, item);
  }

  post(item: T)
  {

  }
}