import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';
import {LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import {LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';
import {Configuration} from '../../../Models/Configuration.model';
import {ConfigurationService} from '../../../Services/Templates/DataService/ConfigurationService';

/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl  } from  '@angular/forms';
import { Client } from 'src/app/Models/Client.model';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{
  editClientForm: FormGroup;
  arrayConfClient: FormArray;
  Configs: Configuration[];
  myClient: Client;
  LoggedClientsQuery$: LoggedClientsQuery[];


  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  // tslint:disable-next-line:max-line-length
  constructor( private ConfigData: ConfigurationService, private tableDataService: ClientService, private dataService: LoggedClientsQueryService, router: Router, private modalService: ModalService, private fb: FormBuilder)
  {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }

  ngOnInit() {

    this.ConfigData.get()
      .subscribe(data => this.Configs = data);

    this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);
  }

  OnDelete(Id: number)
  {
    this.tableDataService.delete(Id).subscribe(data => this.LoggedClientsQuery$ = data);
  }

  // convenience getter for easy access to NewConfigurationForm fields
  get ecf() { return this.editClientForm; }

  // convenience getter for easy access to arrayConfClient
  get getArrayConfig() { return this.ecf.get('arrayConfClient') as FormArray; }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
    this.ecf.get('ClientName').setValue(this.myClient.Name);


    this.editClientForm.patchValue({
      Name: this.myClient.Name,
      arrayConfClient: new FormArray([this.createConfigFormArray()])
    });

  }

  createConfigFormArray(): FormArray {
    const arr = new FormArray([]);
    return arr as FormArray;
  }


  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
      Bool: false
    });
  }


}
