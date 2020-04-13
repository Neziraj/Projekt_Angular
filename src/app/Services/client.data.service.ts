import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client} from '../Models/Client.model';


@Injectable({
  providedIn: 'root'
})
export class  ClientDataService{
  constructor(private http: HttpClient) { }

  ClientURL = 'http://localhost:49497/api/client';

  getClient()
  {
    return this.http.get<Client[]>(this.ClientURL);
  }
}
