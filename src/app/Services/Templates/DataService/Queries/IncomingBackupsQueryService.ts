import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import {IncomingBackupsQuery} from '../../../../Models/Queries/IncomingBackupsQuery';


@Injectable({
  providedIn: 'root'
})
export class IncomingBackupsQueryService extends TemplateDataService<IncomingBackupsQuery>
{
  URL = this.URL + 'query/incomingbackups';
}
