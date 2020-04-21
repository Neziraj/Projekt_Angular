import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import {CompletedBackupsQuery} from '../../../../Models/Queries/CompletedBackupsQuery';

@Injectable({
  providedIn: 'root'
})
export class CompletedBackupsQueryService extends TemplateDataService<CompletedBackupsQuery>
{
  URL = this.URL + 'query/completedbackups';
}
