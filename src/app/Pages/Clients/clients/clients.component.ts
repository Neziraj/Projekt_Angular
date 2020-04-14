import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client.model';
import { HomePageDataService } from 'src/app/Services/home.page.data.service';
import { Router } from '@angular/router';
import { ClientQuery } from 'src/app/Models/Queries/ClientQuery';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit 
{
  Client$: Client[];
  ClientQuery$: ClientQuery[];
  headers = ['ID', 'Název', 'IP', 'MAC', 'Konfigurace', 'Nastavení', 'Připojení'];

  constructor(private dataService: HomePageDataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getClient()
    .subscribe(data => this.Client$ = data);

    this.dataService.getClientQuery()
    .subscribe(data => this.ClientQuery$ = data);
  }

}
