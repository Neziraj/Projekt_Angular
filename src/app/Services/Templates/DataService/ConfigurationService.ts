import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {Configuration} from "../../../Models/Configuration.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends TemplateDataService<Configuration>
{
  URL = this.URL + 'configuration/';
}
