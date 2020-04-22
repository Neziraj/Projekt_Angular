import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import {NewClientsQuery} from '../../../../Models/Queries/NewClientsQuery';

@Injectable({
  providedIn: 'root'
})
export class NewClientsQueryService extends TemplateDataService<NewClientsQuery>
{
  URL = this.URL + 'query/newclients';
}
