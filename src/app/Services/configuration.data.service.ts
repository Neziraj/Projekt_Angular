import {Configuration} from '../Models/Config.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationDataService {
  constructor(private http: HttpClient) { }

  ConfigURL = 'http://localhost:49497/api/configuration';

  getConfig()
  {
    return this.http.get<Configuration[]>(this.ConfigURL);
  }
}
