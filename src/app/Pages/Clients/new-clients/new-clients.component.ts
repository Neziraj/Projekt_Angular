import { Component, OnInit } from '@angular/core';
import {NewClientsQueryService} from '../../../Services/Templates/DataService/Queries/NewClientsQueryService';
import {NewClientsQuery} from '../../../Models/Queries/NewClientsQuery';

import { ModalService } from 'src/app/_modal';
import {Client} from '../../../Models/Client.model';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';


@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  NewClientsQuery$: Client[];
  myClient: Client;

  headers = ['Název', '', ''];
  constructor(private putDataService: ClientService, private dataService: NewClientsQueryService, private modalService: ModalService) { }

  ngOnInit() {
    return this.dataService.get()
      .subscribe(data => this.NewClientsQuery$ = data);
  }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

  saveNewClientName(newClientName: string) {
    this.myClient.Name = newClientName;
    this.myClient.DateOfLogin = new Date();
    return this.putDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
  }
}
