import {TemplateDataService} from '../../Template.data.service';
import {Injectable} from '@angular/core';
import { Admin } from 'src/app/Models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends TemplateDataService<Admin>
{
  URL = this.URL + 'admin';
}
