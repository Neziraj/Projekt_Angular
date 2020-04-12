import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apUrl = 'http://localhost:49497/api/admin';
  constructor(private http: HttpClient) { }
  getAdmins()
  {
    return this.http.get<Admin[]>(this.apUrl);
  }
}
