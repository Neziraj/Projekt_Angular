import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {Source} from "../../../Models/Source.model";

@Injectable({
  providedIn: 'root'
})
export class SourceService extends TemplateDataService<Source>
{
  URL = this.URL + 'source/';
}
