import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {Client} from "../../../Models/Client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends TemplateDataService<Client>
{
  URL = this.URL + 'client/';
}
