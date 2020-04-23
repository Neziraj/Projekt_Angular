import { Component, OnInit } from '@angular/core';
import {NewClientsQueryService} from '../../../Services/Templates/DataService/Queries/NewClientsQueryService';
import {NewClientsQuery} from '../../../Models/Queries/NewClientsQuery';

import { ModalService } from 'src/app/_modal';
import {Client} from '../../../Models/Client.model';


@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  NewClientsQuery$: Client[];
  myClient: Client;

  headers = ['Datum', 'Název', '', ''];
  constructor(private dataService: NewClientsQueryService, private modalService: ModalService) { }

  ngOnInit(){
    return this.dataService.get()
      .subscribe(data => this.NewClientsQuery$ = data);
  }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  saveNewClientName(newClientName: string) {
    this.myClient.Name = newClientName;
  }
}
