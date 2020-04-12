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
import { Settings } from './Models/Settings.model';
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
  Settings$: Settings[];
  SettingsClient$: SettingsClient[];
  SettingsMail$: SettingsMail[];
  Shedule$: Shedule[];
  Source$: Source[];

  constructor(private dataService: DataService) {}

  ngOnInit()
  {
    return this.dataService.getAdmins()
    .subscribe(data => this.Admins$ = data);
  }

}
