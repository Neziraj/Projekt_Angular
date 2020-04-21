import {Injectable} from '@angular/core';
import {Source} from '../../../Models/Source.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SourceService {
  constructor(private http: HttpClient) { }


}
