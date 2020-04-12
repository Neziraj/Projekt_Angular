import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './Admin/admin.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:49497/api/admin';

  constructor(private _http:HttpClient) { }

  getAdmins()
  {
    return this._http.get<Admin[]>(this.apiUrl);
  }
}
