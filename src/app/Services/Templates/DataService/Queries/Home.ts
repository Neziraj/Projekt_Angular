import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeQueryService extends TemplateDataService{
  URL = this.URL + 'query/homequery';
}

