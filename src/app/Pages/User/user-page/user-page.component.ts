import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../../../Services/user.data.service';
import {Admin} from '../../../Models/Admin.model';
import {SettingsMail} from '../../../Models/SettingsMail.model';
import {SettingsClient} from '../../../Models/SettingsClient.model';
import {Setting} from '../../../Models/Settings.model';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  Admin$: Admin[];
  SetMail$: SettingsMail[];
  SetClient$: SettingsClient[];
  Setting$: Setting[];

  constructor(private dataService: UserDataService) { }

  ngOnInit(){
    return this.dataService.getSetting()
      .subscribe(data => this.Setting$ = data);
  }

}
