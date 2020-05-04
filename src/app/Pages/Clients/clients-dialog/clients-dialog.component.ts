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
  selector: 'app-clients-dialog',
  templateUrl: './clients-dialog.component.html',
  styleUrls: ['./clients-dialog.component.scss']
})

export class ClientsDialogComponent implements OnInit
{
  editClientForm: FormGroup;
  arrayConfClient: FormArray;
  Configs: Configuration[];
  myClient: Client;


  constructor( private ConfigData: ConfigurationService, private tableDataService: ClientService, private dataService: LoggedClientsQueryService, private modalService: ModalService, private fb: FormBuilder)
  {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }

  ngOnInit() {

    this.ConfigData.get()
      .subscribe(data => this.Configs = data);

  }

  // convenience getter for easy access to arrayConfClient
  get getArrayConfig() { return this.editClientForm.get('arrayConfClient') as FormArray; }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
    this.editClientForm.get('ClientName').setValue(this.myClient.Name);


    this.editClientForm.patchValue({
      Name: this.myClient.Name,
      arrayConfClient: new FormArray([this.createConfigFormArray()])
    });

  }

  createConfigFormArray(): FormArray {
    const arr = new FormArray([]);
    return arr as FormArray;
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
      Bool: false
    });
  }

  // form array add localDest
  addClientConfiguration(): void {
    this.arrayConfClient = this.getArrayConfig as FormArray;
    this.arrayConfClient.push(this.createClientConfiguration());
  }

  // edit client name
  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.editClientForm.get('ClientName').value;

    return this.tableDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
  }

}
