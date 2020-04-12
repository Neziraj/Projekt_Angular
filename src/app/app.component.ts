import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Admin } from './Models/admin.model';
import { Client} from './Models/Client.model';
import { Config } from './Models/Config.model';
import { DestFtp } from './Models/DestFtpServer.model';
import { DestGoogleDrive } from './Models/DestGoogleDrive.model';
import { DestLocal } from './Models/DestLocal.model';
import { DestSource } from './Models/DestSource.model';
import { Job } from './Models/Job.model';
import {Setting} from './Models/Settings.model';
import { SettingsClient } from './Models/SettingsClient.model';
import { SettingsMail } from './Models/SettingsMail.model';
import { Shedule } from './Models/Shedule.model';
import { Source } from './Models/Source.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  Admins$: Admin[];
  Clients$: Client[];
  Configs$: Config[];
  DestFtp$: DestFtp[];
  DestGoogleDrive$: DestGoogleDrive[];
  DestLocal$: DestLocal[];
  DestSource$: DestSource[];
  Job$: Job[];
  Setting$: Setting[];
  SettingsClient$: SettingsClient[];
  SettingsMail$: SettingsMail[];
  Shedule$: Shedule[];
  Source$: Source[];

  constructor(private dataService: DataService) {}

  ngOnInit()
  {
    return this.dataService.getAdmins()
    .subscribe(data => this.Admins$ = data);
    return this.dataService.getClient()
      .subscribe(data => this.Clients$ = data);
    return this.dataService.getConfig()
      .subscribe(data => this.Configs$ = data);
    return this.dataService.getDestFtp()
      .subscribe(data => this.DestFtp$ = data);
    return this.dataService.getDestGoogleDrive()
      .subscribe(data => this.DestGoogleDrive$ = data);
    return this.dataService.getDestLocal()
      .subscribe(data => this.DestLocal$ = data);
    return this.dataService.getDestSource()
      .subscribe(data => this.DestSource$ = data);
    return this.dataService.getJob()
      .subscribe(data => this.Job$ = data);
    return this.dataService.getSetting()
      .subscribe(data => this.Setting$ = data);
    return this.dataService.getSettingsClient()
      .subscribe(data => this.SettingsClient$ = data);
    return this.dataService.getSettingsMail()
      .subscribe(data => this.SettingsMail$ = data);
    return this.dataService.getShedule()
      .subscribe(data => this.Shedule$ = data);
    return this.dataService.getSource()
      .subscribe(data => this.Source$ = data);

  }

}
