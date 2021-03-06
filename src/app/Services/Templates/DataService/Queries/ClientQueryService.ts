import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import {ClientQuery} from "../../../../Models/Queries/ClientQuery";

@Injectable({
  providedIn: 'root'
})
export class ClientQueryService extends TemplateDataService<ClientQuery>
{
  URL = this.URL + 'query/clientquery';
}
