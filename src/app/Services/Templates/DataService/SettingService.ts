import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { Setting } from 'src/app/Models/Setting.model';

@Injectable({
  providedIn: 'root'
})
export class SettingService extends TemplateDataService<Setting>
{
  URL = this.URL + 'setting';
}
