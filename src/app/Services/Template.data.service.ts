import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService<T> {
  constructor(private http: HttpClient) {
  }

  URL = 'http://localhost:49497/api/';

  get() {
    return this.http.get<[]>(this.URL);
  }

  delete()
  {
    const index = '1';
    return this.http.delete<[]>(this.URL + index);
  }

    /*
      post() {
      return this.http.post<[]>(this.URL);
      }

      put() {
        return this.http.put<[]>(this.URL);
      }


      */
}
