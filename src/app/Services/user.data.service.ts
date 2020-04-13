import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../Models/Admin.model';
import {SettingsMail} from '../Models/SettingMail.model';
import {SettingsClient} from '../Models/SettingClient.model';
import {Setting} from '../Models/Setting.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient) { }

  AdminURL = 'http://localhost:49497/api/admin';
  SettingsMailURL = 'http://localhost:49497/api/settingsmail';
  SettingsClientURL = 'http://localhost:49497/api/settingsclient';
  SettingURL = 'http://localhost:49497/api/setting';


  getAdmin()
  {
    return this.http.get<Admin[]>(this.AdminURL);
  }
  getSettingsMail()
  {
    return this.http.get<SettingsMail[]>(this.SettingsMailURL);
  }
  getSettingsClient()
  {
    return this.http.get<SettingsClient[]>(this.SettingsClientURL);
  }
  getSetting()
  {
    return this.http.get<Setting[]>(this.SettingURL);
  }
}
