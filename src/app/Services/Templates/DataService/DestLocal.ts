import {Injectable} from '@angular/core';
import {DestLocal} from '../../../Models/DestLocal.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DestLocalService {
  constructor(private http: HttpClient) { }


}
