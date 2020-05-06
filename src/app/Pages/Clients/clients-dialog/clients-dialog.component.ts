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
  LoggedClientsQuery$: LoggedClientsQuery[];


  constructor(private tableDataService: ClientService, private configurationService: ConfigurationService, private dataService: LoggedClientsQueryService, router: Router, private modalService: ModalService, private fb: FormBuilder) {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }

  ngOnInit() {

    this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);

    this.configurationService.get()
      .subscribe(data => this.Configs = data);
  }




  // convenience getter for easy access to NewConfigurationForm fields
  get ecf() { return this.editClientForm; }

  // convenience getter for easy access to arrayConfClient
  get acc() { return this.ecf.get('arrayConfClient'); }

  openModal(idDialog: string, client: Client) {

    this.myClient = client;
    this.ecf.get('ClientName').setValue(this.myClient.Name);

    this.fillClientConfiguration();

  }


  createConfigFormArray(): FormArray {
    const arr = new FormArray([]);
    return arr as FormArray;
  }

  /*createConfigFormArray(): FormArray {
    let arr = new FormArray([]);
    this.Configs.forEach(element => {
      arr.push(new FormControl(false));
    });
    return arr as FormArray;
  }*/

  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
    });
  }

  // form array add localDest
  fillClientConfiguration(): void {
    // this.arrayConfClient.clear();
    this.arrayConfClient = this.acc as FormArray;

    this.Configs.forEach(element => {
      this.arrayConfClient.push(this.createClientConfiguration());
    });

    /*this.arrayConfClient = this.acc as FormArray;
    this.arrayConfClient.push(this.createClientConfiguration());*/
  }

  // edit client name
  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.ecf.get('ClientName').value;
  }
  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

}
