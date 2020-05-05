import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';
import {LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import {LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';
import { ConfigurationService } from 'src/app/Services/Templates/DataService/ConfigurationService';

/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder, FormArray  } from  '@angular/forms';
import { Client } from 'src/app/Models/Client.model';
import {Configuration} from '../../../Models/Configuration.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit
{
  editClientForm: FormGroup;
  arrayConfClient: FormArray;
  myClient: Client;
  Configs: Configuration[];
  ConfigID: number;
  ConfigName: string;
  LoggedClientsQuery$: LoggedClientsQuery[];



  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor(private tableDataService: ClientService, private configurationService: ConfigurationService, private dataService: LoggedClientsQueryService, router: Router, private modalService: ModalService, private fb: FormBuilder) 
  {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);
    
    this.configurationService.get()
      .subscribe(data => this.Configs = data);
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

    this.fillClientConfiguration();
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
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
    //this.arrayConfClient.clear();
    this.arrayConfClient = this.acc as FormArray;

    this.Configs.forEach(element =>{
      this.arrayConfClient.push(this.createClientConfiguration());
    })

      /*this.arrayConfClient = this.acc as FormArray;
      this.arrayConfClient.push(this.createClientConfiguration());*/
  }

  // edit client name
  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.ecf.get('ClientName').value;

    return this.tableDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
  }
}
