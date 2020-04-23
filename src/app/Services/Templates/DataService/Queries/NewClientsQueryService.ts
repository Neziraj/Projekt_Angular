import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import {NewClientsQuery} from '../../../../Models/Queries/NewClientsQuery';
import {Client} from '../../../../Models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class NewClientsQueryService extends TemplateDataService<Client>
{
  URL = this.URL + 'query/newclients';
}
