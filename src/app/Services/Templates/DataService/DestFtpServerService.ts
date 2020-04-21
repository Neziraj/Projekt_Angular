import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { DestFtp } from 'src/app/Models/DestFtpServer.model';

@Injectable({
  providedIn: 'root'
})
export class DestFtpServerService extends TemplateDataService<DestFtp>{
  URL = this.URL + 'destftpserver';
}

