import { Component, OnInit } from '@angular/core';
import { HomePageDataService } from './Services/home.page.data.service';
import { Admin } from './Models/admin.model';
import { Client} from './Models/Client.model';
import { Configuration } from './Models/Config.model';
import { DestFtp } from './Models/DestFtpServer.model';
import { DestGoogleDrive } from './Models/DestGoogleDrive.model';
import { DestLocal } from './Models/DestLocal.model';
import { DestSource } from './Models/DestSource.model';
import { Job } from './Models/Job.model';
import {Setting} from './Models/Setting.model';
import { SettingsClient } from './Models/SettingClient.model';
import { SettingsMail } from './Models/SettingMail.model';
import { Shedule } from './Models/Shedule.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit()
  {
  }

}
