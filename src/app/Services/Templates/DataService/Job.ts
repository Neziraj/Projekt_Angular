import {Injectable} from '@angular/core';
import {Job} from '../../../Models/Job.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) { }
}
