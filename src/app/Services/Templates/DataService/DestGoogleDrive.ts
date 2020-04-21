import {Injectable} from '@angular/core';
import {DestGoogleDrive} from '../../../Models/DestGoogleDrive.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DestGoogleDriveService {
  constructor(private http: HttpClient) { }


}
