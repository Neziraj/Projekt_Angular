import {Injectable} from '@angular/core';
import {Setting} from '../../../Models/Setting.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SettingService {
  constructor(private http: HttpClient) { }

}
