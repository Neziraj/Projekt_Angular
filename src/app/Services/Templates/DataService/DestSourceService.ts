import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { DestSource } from 'src/app/Models/DestSource.model';

@Injectable({
  providedIn: 'root'
})
export class DestSourceService extends TemplateDataService<DestSource>
{
  URL = this.URL + 'destsource';
}

