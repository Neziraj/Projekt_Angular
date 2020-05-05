import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Configuration.model';
import {ConfigurationService} from '../../../Services/Templates/DataService/ConfigurationService';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss']
})

export class ConfigurationTableComponent implements OnInit {
  headers = ['ID', 'Název', 'Popis', '', ''];
  Config: Configuration[];

  constructor(private dataService: ConfigurationService) { }

  ngOnInit(){
    return this.dataService.get()
      .subscribe(data => this.Config = data);
  }


  OnDelete(configId: number)
  {
    this.dataService.delete(configId).subscribe();
  }
}
