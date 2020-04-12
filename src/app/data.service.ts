import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './Models/admin.model';
import { Client} from './Models/Client.model';
import { Config } from './Models/Config.model';
import { DestFtp } from './Models/DestFtpServer.model';
import { DestGoogleDrive } from './Models/DestGoogleDrive.model';
import { DestLocal } from './Models/DestLocal.model';
import { DestSource } from './Models/DestSource.model';
import { Job } from './Models/Job.model';
import { Settings } from './Models/Settings.model';
import { SettingsClient } from './Models/SettingsClient.model';
import { SettingsMail } from './Models/SettingsMail.model';
import { Shedule } from './Models/Shedule.model';
import { Source  } from './Models/Source.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:49497/api/admin';

  constructor(private http: HttpClient) { }

  getAdmins()
  {
    return this.http.get<Admin[]>(this.apiUrl);
  }
  getClient()
  {
    return this.http.get<Client[]>(this.apiUrl);
  }
  getConfig()
  {
    return this.http.get<Config[]>(this.apiUrl);
  }
  getDestFtp()
  {
    return this.http.get<DestFtp[]>(this.apiUrl);
  }
  getDestGoogleDrive()
  {
    return this.http.get<DestGoogleDrive[]>(this.apiUrl);
  }
  getDestLocal()
  {
    return this.http.get<DestLocal[]>(this.apiUrl);
  }
  getDestSource()
  {
    return this.http.get<DestSource[]>(this.apiUrl);
  }
  getJob()
  {
    return this.http.get<Job[]>(this.apiUrl);
  }
  getSettings()
  {
    return this.http.get<Settings[]>(this.apiUrl);
  }
  getSettingsClient()
  {
    return this.http.get<SettingsClient[]>(this.apiUrl);
  }
  getSettingsMail()
  {
    return this.http.get<SettingsMail[]>(this.apiUrl);
  }
  getShedule()
  {
    return this.http.get<Shedule[]>(this.apiUrl);
  }
  getSource()
  {
    return this.http.get<Source[]>(this.apiUrl);
  }




}
