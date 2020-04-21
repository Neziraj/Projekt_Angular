import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {ClientQuery} from '../../../Models/Queries/ClientQuery';
import { Client } from 'src/app/Models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends TemplateDataService<Client>
{
  URL = this.URL + 'client/';
}
