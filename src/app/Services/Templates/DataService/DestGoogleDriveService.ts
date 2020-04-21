import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { DestGoogleDrive } from 'src/app/Models/DestGoogleDrive.model';

@Injectable({
  providedIn: 'root'
})
export class destGoogleDriveService extends TemplateDataService<DestGoogleDrive>
{
  URL = this.URL + 'destgoogledrive';
}

