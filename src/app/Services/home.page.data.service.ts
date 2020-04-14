import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeQuery } from '../Models/Queries/HomeQuery';
import { Client } from '../Models/Client.model';
import { Admin } from '../Models/Admin.model';
import { Configuration } from '../Models/Config.model';
import { DestFtp } from '../Models/DestFtpServer.model';
import { DestGoogleDrive } from '../Models/DestGoogleDrive.model';
import { DestLocal } from '../Models/DestLocal.model';
import { DestSource } from '../Models/DestSource.model';
import { Job } from '../Models/Job.model';
import { Setting } from '../Models/Setting.model';
import { SettingsClient } from '../Models/SettingClient.model';
import { SettingsMail } from '../Models/SettingMail.model';
import { Schedule } from '../Models/Shedule.model';
import { Source } from '../Models/Source.model';
import { ClientQuery } from '../Models/Queries/ClientQuery';

@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {
  constructor(private http: HttpClient) { }

  QueryURL = 'http://localhost:49497/api/admin/homequery';
  ClientQueryURL = 'http://localhost:49497/api/admin/clientquery';

  AdminURL = 'http://localhost:49497/api/admin';
  ClientURL = 'http://localhost:49497/api/client';
  ConfigurationURL = 'http://localhost:49497/api/configuration';
  DestFTPServerURL = 'http://localhost:49497/api/destftpserver';
  DestGoogleDriveURL = 'http://localhost:49497/api/destgoogledrive';
  DestLocalURL = 'http://localhost:49497/api/destlocal';
  DestSourceURL = 'http://localhost:49497/api/destsource'
  JobURL = 'http://localhost:49497/api/job';
  SettingURL = 'http://localhost:49497/api/setting';
  SettingsClientURL = 'http://localhost:49497/api/settingsclient';
  SettingsMailURL = 'http://localhost:49497/api/SettingsMail';
  ScheduleURL = 'http://localhost:49497/api/schedule'
  SourceURL = 'http://localhost:49497/api/source';

  getQuery()
  {
    return this.http.get<HomeQuery[]>(this.QueryURL);
  }
  getClientQuery()
  {
    return this.http.get<ClientQuery[]>(this.ClientQueryURL);
  }

  getAdmin()
  {
    return this.http.get<Admin[]>(this.AdminURL);
  }
  getClient()
  {
    return this.http.get<Client[]>(this.ClientURL);
  }
  getConfiguration()
  {
    return this.http.get<Configuration[]>(this.ConfigurationURL);
  }
  getDestFTPServer()
  {
    return this.http.get<DestFtp[]>(this.DestFTPServerURL);
  }
  getDestGoogleDrive()
  {
    return this.http.get<DestGoogleDrive[]>(this.DestGoogleDriveURL);
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
  getSchedule()
  {
    return this.http.get<Schedule[]>(this.ScheduleURL)
  }
  getSource()
  {
    return this.http.get<Source[]>(this.SourceURL);
  }
}
