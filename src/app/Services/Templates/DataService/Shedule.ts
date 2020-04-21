import {Injectable} from '@angular/core';
import {Schedule} from '../../../Models/Shedule.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SheduleService {
  constructor(private http: HttpClient) { }


}
