import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Config.model';
import {ConfigurationDataService} from '../../../Services/configuration.data.service';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {

  Config$: Configuration[];

  constructor(private dataService: ConfigurationDataService ) { }

  ngOnInit(){
    return this.dataService.getConfig()
      .subscribe(data => this.Config$ = data);
  }

}
