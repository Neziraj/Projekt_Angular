import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';
import {LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import {LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';
/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder, FormArray  } from  '@angular/forms';
import { Client } from 'src/app/Models/Client.model';
import {Configuration} from '../../../Models/Configuration.model';
import {ConfigurationService} from '../../../Services/Templates/DataService/ConfigurationService';
import {element} from 'protractor';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{
  Name: string;
  Id: number;

  editClientForm: FormGroup;
  arrayConfClient: FormArray;
  myClient: Client;
  LoggedClientsQuery$: LoggedClientsQuery[];
  Config: Configuration[];


  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor( private ConfigData: ConfigurationService, private tableDataService: ClientService, private dataService: LoggedClientsQueryService, router: Router, private modalService: ModalService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([this.createClientConfiguration()])
    });


    return  this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);

  }

  OnDelete(Id: number)
  {
    this.tableDataService.delete(Id).subscribe(data => this.LoggedClientsQuery$ = data);
  }

  // convenience getter for easy access to NewConfigurationForm fields
  get ecf() { return this.editClientForm; }

  // convenience getter for easy access to arrayConfClient
  get acc() { return this.ecf.get('arrayConfClient'); }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
    this.ecf.get('ClientName').setValue(this.myClient.Name);

    // tslint:disable-next-line:no-shadowed-variable
    this.ConfigData.get()[''].forEach(element => {
      this.Id = element.Id;
      this.Name = element.Name;
      this.addClientConfiguration();
    });
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
      Bool: false,
      Name: this.Name,
      Id: this.Id
    });
  }

  // form array add localDest
  addClientConfiguration(): void {
      this.arrayConfClient = this.acc as FormArray;
      this.arrayConfClient.push(this.createClientConfiguration());
  }

  // edit client name
  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.ecf.get('ClientName').value;

    return this.tableDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
  }

}
