import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client.model';
import { Router } from '@angular/router';
import {ClientService} from '../../../Services/Templates/DataService/Client';
import {ClientQuery} from '../../../Models/Queries/ClientQuery';


@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{
  ClientQuery$: ClientQuery[];
  headers = ['ID', 'Název', 'IP', 'MAC', 'Konfigurace', '', ''];

  constructor(private dataService: ClientService, router: Router) {
  }
  OnDelete()
  {
    this.dataService.delete().subscribe(data => this.ClientQuery$ = data);
  }

  ngOnInit() {
    return this.dataService.get()
      .subscribe(data => this.ClientQuery$ = data);

  }
}
