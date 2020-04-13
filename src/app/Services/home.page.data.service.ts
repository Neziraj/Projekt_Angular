import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client} from '../Models/Client.model';
import { Job } from '../Models/Job.model';
import { Shedule } from '../Models/Shedule.model';



@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {
  constructor(private http: HttpClient) { }

  ClientURL = 'http://localhost:49497/api/client';
  JobURL = 'http://localhost:49497/api/job';
  SheduleURL = 'http://localhost:49497/api/shedule';

  getClient()
  {
    return this.http.get<Client[]>(this.ClientURL);
  }
  getJob()
  {
    return this.http.get<Job[]>(this.JobURL);
  }
  getShedule()
  {
    return this.http.get<Shedule[]>(this.SheduleURL);
  }
}
