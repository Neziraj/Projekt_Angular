import {Injectable} from '@angular/core';
import {Job} from '../Models/Job.model';
import {Shedule} from '../Models/Shedule.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackupDataService {
  constructor(private http: HttpClient) { }

  JobURL = 'http://localhost:49497/api/job';
  SheduleURL = 'http://localhost:49497/api/shedule';


  getJob()
  {
    return this.http.get<Job[]>(this.JobURL);
  }
  getShedule()
  {
    return this.http.get<Shedule[]>(this.SheduleURL);
  }
}
