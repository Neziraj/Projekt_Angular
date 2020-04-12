import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './Models/admin.model';
import { Client} from './Models/Client.model';
import { Configuration } from './Models/Config.model';
import { DestFtp } from './Models/DestFtpServer.model';
import { DestGoogleDrive } from './Models/DestGoogleDrive.model';
import { DestLocal } from './Models/DestLocal.model';
import { DestSource } from './Models/DestSource.model';
import { Job } from './Models/Job.model';
import { Setting } from './Models/Settings.model';
import { SettingsClient } from './Models/SettingsClient.model';
import { SettingsMail } from './Models/SettingsMail.model';
import { Shedule } from './Models/Shedule.model';
import { Source  } from './Models/Source.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  AdminURL = 'http://localhost:49497/api/admin';
  ClientURL = 'http://localhost:49497/api/client';
  ConfigURL = 'http://localhost:49497/api/configuration';
  DestFtpURL = 'http://localhost:49497/api/';
  DestGoogleURL = 'http://localhost:49497/api/';
  DestLocalURL = 'http://localhost:49497/api/';
  DestSourceURL = 'http://localhost:49497/api/DestSource';
  JobURL = 'http://localhost:49497/api/';
  SettingURL = 'http://localhost:49497/api/';
  SettingsClientURL = 'http://localhost:49497/api/';
  SettingsMailURL = 'http://localhost:49497/api/';
  SheduleURL = 'http://localhost:49497/api/';
  SourceURL = 'http://localhost:49497/api/';


  getAdmins()
  {
    return this.http.get<Admin[]>(this.AdminURL);
  }

  getClient()
  {
    return this.http.get<Client[]>(this.ClientURL);
  }

  getConfigs()
  {
    return this.http.get<Configuration[]>(this.ConfigURL);
  }

  getDestFtp()
  {
    return this.http.get<DestFtp[]>(this.DestFtpURL);
  }

  getDestGoogleDrive()
  {
    return this.http.get<DestGoogleDrive[]>(this.DestGoogleURL);
  }

  getDestLocal()
  {
    return this.http.get<DestLocal[]>(this.DestLocalURL);
  }

  getDestSource()
  {
    return this.http.get<DestSource[]>(this.DestSourceURL);
  }
  getJob()
  {
    return this.http.get<Job[]>(this.JobURL);
  }
  getSetting()
  {
    return this.http.get<Setting[]>(this.SettingURL);
  }
  getSettingsClient()
  {
    return this.http.get<SettingsClient[]>(this.SettingsClientURL);
  }
  getSettingsMail()
  {
    return this.http.get<SettingsMail[]>(this.SettingsMailURL);
  }
  getShedule()
  {
    return this.http.get<Shedule[]>(this.SheduleURL);
  }
  getSource()
  {
    return this.http.get<Source[]>(this.SourceURL);
  }

}
