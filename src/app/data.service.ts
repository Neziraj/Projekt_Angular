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
  ConfigURL = 'http://localhost:49497/api/config';
  DestFtpURL = 'http://localhost:49497/api/admin';
  DestGoogleURL = 'http://localhost:49497/api/admin';
  DestLocalURL = 'http://localhost:49497/api/admin';
  DestSourceURL = 'http://localhost:49497/api/admin';
  JobURL = 'http://localhost:49497/api/admin';
  SettingURL = 'http://localhost:49497/api/admin';
  SettingsClientURL = 'http://localhost:49497/api/admin';
  SettingsMailURL = 'http://localhost:49497/api/admin';
  SheduleURL = 'http://localhost:49497/api/admin';
  SourceURL = 'http://localhost:49497/api/admin';


  getAdmins()
  {
    return this.http.get<Admin[]>(this.AdminURL);
  }

  getClient()
  {
    return this.http.get<Client[]>(this.ClientURL);
  }

  getConfig()
  {
    return this.http.get<Config[]>(this.ConfigURL);
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
