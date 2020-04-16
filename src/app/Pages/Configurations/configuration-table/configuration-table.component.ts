import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Config.model';
import {ConfigurationDataService} from '../../../Services/configuration.data.service';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss']
})

export class ConfigurationTableComponent implements OnInit {
  headers = ['ID', 'Název', 'Popis', 'Nastavení', 'Smazat'];
  Config$: Configuration[];

  constructor(private dataService: ConfigurationDataService ) { }

  ngOnInit(){
    return this.dataService.getConfig()
      .subscribe(data => this.Config$ = data);
  }
}
