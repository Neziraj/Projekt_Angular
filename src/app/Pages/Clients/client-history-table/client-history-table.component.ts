import { Component, OnInit } from '@angular/core';
import {Client} from '../../../Models/Client.model';
import {ClientDataService} from '../../../Services/client.data.service';



@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientHistoryTableComponent implements OnInit {
  Clients$: Client[];

  constructor(private dataService: ClientDataService) { }

  ngOnInit(){

    return this.dataService.getClient()
      .subscribe(data => this.Clients$ = data);

  }

}
