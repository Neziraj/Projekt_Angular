import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { Schedule } from 'src/app/Models/Shedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends TemplateDataService<Schedule>
{
  URL = this.URL + 'schedule';
}

