import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../Models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  constructor(private http: HttpClient) { }

  AdminURL = 'http://localhost:49497/api/admin';

  getAdmin()
  {
    return this.http.get<Admin[]>(this.AdminURL);
  }
}
