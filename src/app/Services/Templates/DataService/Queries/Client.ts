import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientQueryService extends TemplateDataService{
  URL = this.URL + 'query/clientquery';
}
