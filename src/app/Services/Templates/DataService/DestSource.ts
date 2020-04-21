import {Injectable} from '@angular/core';
import {DestSource} from '../../../Models/DestSource.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DestSourceService {
  constructor(private http: HttpClient) { }

}
