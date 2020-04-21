import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationS extends TemplateDataService{
  URL = this.URL + 'configuration';
}
