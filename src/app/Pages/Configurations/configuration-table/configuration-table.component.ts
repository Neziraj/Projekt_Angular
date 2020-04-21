import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Config.model';
import {ConfigurationS} from '../../../Services/Templates/DataService/Configuration';
import {TemplateDataService} from '../../../Services/Template.data.service';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss']
})

export class ConfigurationTableComponent implements OnInit {
  headers = ['ID', 'Název', 'Popis', '', ''];
  Config$: Configuration[];

  constructor(private dataService: ConfigurationS) { }

  ngOnInit(){
    return this.dataService.get()
      .subscribe(data => this.Config$ = data);
  }
}
