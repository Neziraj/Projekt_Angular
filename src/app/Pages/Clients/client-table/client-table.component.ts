import { Component, OnInit } from '@angular/core';
import {Client} from '../../../Models/Client.model';
import {ClientDataService} from '../../../Services/client.data.service';
import {Configuration} from '../../../Models/Config.model';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {
  Clients$: Client[];
  Config$: Configuration[];

  constructor(private dataService: ClientDataService) { }

  ngOnInit(){

    return this.dataService.getClient()
      .subscribe(data => this.Clients$ = data);
/*Potřeba opravit*/
  }
}
