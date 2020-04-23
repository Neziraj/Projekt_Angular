import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelTemplate } from '../Models/ModelTemplate';
import { TestBed } from '@angular/core/testing';
import {Observable} from "rxjs";

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
}

/*
  post()
  {
    return this.http.post<[]>(this.URL);
  }


}

 */
