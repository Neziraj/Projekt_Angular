import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeQuery } from '../Models/Queries/HomeQuery';

@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {
  constructor(private http: HttpClient) { }
  QueryURL = 'http://localhost:49497/api/admin/homequery';

  getQuery()
  {
    return this.http.get<HomeQuery[]>(this.QueryURL);
  }
}
