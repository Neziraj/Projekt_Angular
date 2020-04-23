import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelTemplate } from '../Models/ModelTemplate';
import { TestBed } from '@angular/core/testing';

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
}

/*
  post()
  {
    return this.http.post<[]>(this.URL);
  }

  put()
  {
    return this.http.put<[]>(this.URL);
  }
}*/
