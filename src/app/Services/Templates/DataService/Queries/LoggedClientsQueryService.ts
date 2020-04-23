import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import {LoggedClientsQuery} from '../../../../Models/Queries/LoggedClientsQuery';

@Injectable({
  providedIn: 'root'
})
export class LoggedClientsQueryService extends TemplateDataService<LoggedClientsQuery>
{
  URL = this.URL + 'query/loggedclients';
}
