import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';


@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{

  ClientQuery$: ClientQuery[];


  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor(private dataService: ClientQueryService, router: Router) {
  }

  OnDelete(Id: number)
  {
    this.dataService.delete(Id).subscribe(data => this.ClientQuery$ = data);
  }

  ngOnInit() {
    return this.dataService.get()
      .subscribe(data => this.ClientQuery$ = data);

  }

}
