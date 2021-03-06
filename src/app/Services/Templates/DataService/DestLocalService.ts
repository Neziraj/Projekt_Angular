import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import {DestLocal} from "../../../Models/DestLocal.model";

@Injectable({
  providedIn: 'root'
})
export class DestLocalService extends TemplateDataService<DestLocal>
{
  URL = this.URL + 'destlocal/';
}
