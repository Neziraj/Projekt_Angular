import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { Job } from 'src/app/Models/Job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService extends TemplateDataService<Job>
{
  URL = this.URL + 'job';
}

