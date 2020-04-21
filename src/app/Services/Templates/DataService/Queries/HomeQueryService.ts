import {TemplateDataService} from '../../../Template.data.service';
import {Injectable} from '@angular/core';
import { HomeQuery } from 'src/app/Models/Queries/HomeQuery';

@Injectable({
  providedIn: 'root'
})
export class HomeQueryService extends TemplateDataService<HomeQuery>
{
  URL = this.URL + 'query/homequery';
}
