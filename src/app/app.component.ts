import {Component, OnInit, ViewChild} from '@angular/core';
import { Admin } from './Models/admin.model';
import { Client} from './Models/Client.model';
import { Configuration } from './Models/Configuration.model';
import { DestFtp } from './Models/DestFtpServer.model';
import { DestGoogleDrive } from './Models/DestGoogleDrive.model';
import { DestLocal } from './Models/DestLocal.model';
import { DestSource } from './Models/DestSource.model';
import { Job } from './Models/Job.model';
import {Setting} from './Models/Setting.model';
import { SettingsClient } from './Models/SettingClient.model';
import { SettingsMail } from './Models/SettingMail.model';
import { Schedule } from './Models/Shedule.model';

import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/Services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  currentUser: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit()
  {
  }

}

