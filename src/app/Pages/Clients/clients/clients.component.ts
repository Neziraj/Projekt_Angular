import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';
import {LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import {LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';


@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{

  LoggedClientsQuery$: LoggedClientsQuery[];


  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor(private tableDataService: ClientService, private dataService: LoggedClientsQueryService, router: Router) {
  }

  OnDelete(Id: number)
  {
    this.tableDataService.delete(Id).subscribe(data => this.LoggedClientsQuery$ = data);
  }

  ngOnInit() {
    return this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);

  }

}
