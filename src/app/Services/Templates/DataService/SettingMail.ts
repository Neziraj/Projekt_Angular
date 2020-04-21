import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { SettingsMail } from 'src/app/Models/SettingMail.model';

@Injectable({
  providedIn: 'root'
})
export class SettingMailService extends TemplateDataService<SettingsMail>
{
  URL = this.URL + 'settingsmail';
}

