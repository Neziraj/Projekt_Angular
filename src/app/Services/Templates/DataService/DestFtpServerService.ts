import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {DestFtp} from "../../../Models/DestFtpServer.model";

@Injectable({
  providedIn: 'root'
})
export class DestFtpServerService extends TemplateDataService<DestFtp>{
  URL = this.URL + 'destftpserver/';
}

