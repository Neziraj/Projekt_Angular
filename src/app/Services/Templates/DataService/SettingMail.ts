import {Injectable} from '@angular/core';
import {SettingsMail} from '../../../Models/SettingMail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SettingMailService {
  constructor(private http: HttpClient) { }


}
