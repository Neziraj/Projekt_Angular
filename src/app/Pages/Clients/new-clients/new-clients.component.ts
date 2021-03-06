import { Component, OnInit } from '@angular/core';
import { NewClientsQueryService } from '../../../Services/Templates/DataService/Queries/NewClientsQueryService';
import {ClientService} from "../../../Services/Templates/DataService/ClientService";
import { Client } from '../../../Models/Client.model';

/* Dialogy */
import {ModalService} from "../../../_modal";
import { FormGroup, Validators, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  newClientForm: FormGroup;

  NewClientsQuery: Client[];
  myClient: Client;

  headers = ['Název', '', ''];
  constructor(
    private putDataService: ClientService,
    private dataService: NewClientsQueryService,
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newClientForm = this.formBuilder.group({
      ClientName: ['', Validators.required],
    });
    return this.dataService.get()
      .subscribe(data => this.NewClientsQuery = data);
  }

   // convenience getter for easy access to NewClientForm fields
   get ncf() { return this.newClientForm.controls; }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
    this.ncf.ClientName.setValue(this.myClient.Name);
  }

  deny(client: Client)
  {
    this.putDataService.delete(client.Id)
    .subscribe();
  }

  // convenience getter for easy access to NewClientForm fields

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);

  }

  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.ncf.ClientName.value;

    this.putDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
    location.reload();
  }
}

