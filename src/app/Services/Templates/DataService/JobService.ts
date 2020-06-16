import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {Job} from "../../../Models/Job.model";

@Injectable({
  providedIn: 'root'
})
export class JobService extends TemplateDataService<Job>
{
  URL = this.URL + 'job/';
}

