import {Injectable} from '@angular/core';
import {DestFtp} from '../../../Models/DestFtpServer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DestFtpServerService {
  constructor(private http: HttpClient) { }


}
