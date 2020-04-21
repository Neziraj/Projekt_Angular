import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {ClientQuery} from '../../../Models/Queries/ClientQuery';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends TemplateDataService{
  URL = this.URL + 'client/';
}
