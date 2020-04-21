import { Component, OnInit } from '@angular/core';
import {Admin} from '../../../Models/Admin.model';
import {SettingsMail} from '../../../Models/SettingMail.model';
import {SettingsClient} from '../../../Models/SettingClient.model';
import {Setting} from '../../../Models/Setting.model';



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

  constructor() { }

  ngOnInit(){
  }

}

