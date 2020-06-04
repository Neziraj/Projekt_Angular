import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import { LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';
import { ConfigurationService } from 'src/app/Services/Templates/DataService/ConfigurationService';

/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl  } from  '@angular/forms';
import { Client } from 'src/app/Models/Client.model';
import {Configuration} from '../../../Models/Configuration.model';
import {Job} from '../../../Models/Job.model';
import {JobService} from '../../../Services/Templates/DataService/JobService';
import {element} from "protractor";

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit {
  editClientForm: FormGroup;
  arrayConfClient: FormArray;

  Configs: Configuration[];
  Clients: Client[];
  Jobs: Job[];
  LoggedClientsQuery$: LoggedClientsQuery[];
  log: LoggedClientsQuery;
  clientQuery: ClientQuery[];

  myConfigId: number;
  myClient: Client;
  myJob: Job;

  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor
(
    private tableDataService: ClientService,
    private configurationService: ConfigurationService,
    private dataService: LoggedClientsQueryService,
    private router: Router,
    private modalService: ModalService,
    private fb: FormBuilder,
    private jobService: JobService
    )
  {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }


  ngOnInit() {

    this.tableDataService.get()
      .subscribe(data => this.Clients = data);

    this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);

    this.configurationService.get()
      .subscribe(data => this.Configs = data);

  }

  OnDelete(Id: number) {
    this.tableDataService.delete(Id).subscribe(data => this.LoggedClientsQuery$ = data);
  }

  // convenience getter for easy access to NewConfigurationForm fields
  get ecf() {
    return this.editClientForm;
  }

  // convenience getter for easy access to arrayConfClient
  get acc() {
    return this.ecf.get('arrayConfClient');
  }

  openModal(idDialog: string, client: Client) {

    this.modalService.open(idDialog);
    this.myClient = client;

    this.ecf.get('ClientName').setValue(this.myClient.Name);
    this.fillClientConfiguration();

    this.jobService.get()['Id'].forEach(element => {

      if (this.myClient.Name === element.Name)
      {
        this.Jobs.push(element);
      }
    });
  }


  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
      Bool: '',
      ConfigId: [this.myConfigId]
    });
  }

  // form array add localDest
  fillClientConfiguration(): void {
    // this.arrayConfClient.clear();

    this.arrayConfClient = this.acc as FormArray;

    //console.log(this.Configs);
    this.Configs.forEach(element => {

      this.arrayConfClient.push(this.createClientConfiguration());
      this.myConfigId = element.Id;

    });

    this.arrayConfClient.controls.forEach(element => {
      if (element.value === this.Jobs[''].Id){
        element.patchValue(true);
      }
    })
  }

  // edit client name
  saveNewClientName() {
    this.myClient.DateOfLogin = new Date();
    this.myClient.Name = this.ecf.get('ClientName').value;

    this.tableDataService.put(this.myClient)
      .subscribe(data => this.myClient = data);
    location.reload();
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
    location.reload();

  }
}
