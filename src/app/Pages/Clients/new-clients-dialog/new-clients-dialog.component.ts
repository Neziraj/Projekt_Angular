import { Component, OnInit } from '@angular/core';
import {Client} from '../../../Models/Client.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../../Services/Templates/DataService/ClientService';
import {NewClientsQueryService} from '../../../Services/Templates/DataService/Queries/NewClientsQueryService';
import {ModalService} from '../../../_modal';

@Component({
  selector: 'app-new-clients-dialog',
  templateUrl: './new-clients-dialog.component.html',
  styleUrls: ['./new-clients-dialog.component.scss']
})

export class NewClientsDialogComponent implements OnInit {
  NewClientsQuery$: Client[];
  newClientForm: FormGroup;
  myClient: Client;

  constructor( private putDataService: ClientService, private dataService: NewClientsQueryService, private modalService: ModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newClientForm = this.formBuilder.group({
      ClientName: ['', Validators.required],
    });
    return this.dataService.get()
      .subscribe(data => this.NewClientsQuery$ = data);
  }

  // convenience getter for easy access to NewClientForm fields
  get ncf() { return this.newClientForm.controls; }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.ncf.ClientName.value;

    return this.putDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
  }

}
