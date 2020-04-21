import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client.model';
import { Router } from '@angular/router';
import { ClientQuery } from 'src/app/Models/Queries/ClientQuery';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{
  ClientQuery$: ClientQuery[];
  headers = ['ID', 'Název', 'IP', 'MAC', 'Konfigurace', '', ''];

  constructor(router: Router) { }

  ngOnInit(): void {
  }

}
