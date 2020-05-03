import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';
import { LoggedClientsQuery } from '../../../Models/Queries/LoggedClientsQuery';
import { LoggedClientsQueryService } from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';
import { Configuration } from '../../../Models/Configuration.model'
import { ConfigurationService } from 'src/app/Services/Templates/DataService/ConfigurationService';
/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder, FormArray  } from  '@angular/forms';
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
  myClient: Client;
  Configurations: Configuration[];
  LoggedClientsQuery$: LoggedClientsQuery[];


  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor(private configurationService: ConfigurationService, private tableDataService: ClientService, private dataService: LoggedClientsQueryService, router: Router, private modalService: ModalService, private fb: FormBuilder) {
  }
  
  ngOnInit() {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    })

    return this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);

  }

  

  OnDelete(Id: number)
  {
    this.tableDataService.delete(Id).subscribe(data => this.LoggedClientsQuery$ = data);
  }

  // convenience getter for easy access to NewConfigurationForm fields
  get ecf() { return this.editClientForm; }

  // convenience getter for easy access to ArrayLocalDest
  get acc() { return this.ecf.get('localDestination.arrayLocalDest') }

  openModal(idDialog: string, client: Client) {
    this.modalService.open(idDialog);
    this.myClient = client;
    this.ecf.get('ClientName').setValue(this.myClient.Name);
    this.fillClientConfiguration();
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

  // form array returns localDest
  createClientConfiguration(configurationName: string, id: number): FormGroup {
    return this.fb.group({
      Name: '',
      Id: id,
      Bool: false,
    });
  }

  // form array add localDest
  fillClientConfiguration(): void {
    this.arrayConfClient.clear();
    this.Configurations.forEach(configuration => {
      this.arrayConfClient.push(this.createClientConfiguration(configuration.Name, configuration.Id));
    });
  }
}
