import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import { LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import {ClientService} from "../../../Services/Templates/DataService/ClientService";
import {ConfigurationService} from "../../../Services/Templates/DataService/ConfigurationService";

/* Dialogy */
import {ModalService} from "../../../_modal";
import { FormGroup, Validators, FormBuilder, FormArray, FormControl  } from  '@angular/forms';
import {Client} from "../../../Models/Client.model";
import {Configuration} from '../../../Models/Configuration.model';
import {Job} from '../../../Models/Job.model';
import {JobService} from '../../../Services/Templates/DataService/JobService';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit {


  Configs: Configuration[];
  myConfiguration: Configuration;

  Jobs: Job[];
  myJob: Job;

  Client: Client[];
  myClient: Client;
  clientQuery: ClientQuery[];

  LoggedClientsQuery: LoggedClientsQuery[];
  myLoggedClientsQuery: LoggedClientsQuery;


  editClientForm: FormGroup;
  arrayConfClient: FormArray;

  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor
(
    private tableDataService: ClientService,
    private configurationService: ConfigurationService,
    private dataService: LoggedClientsQueryService,
    private router: Router,
    private modalService: ModalService,
    private fb: FormBuilder,
    )
  {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }


  ngOnInit() {


    this.tableDataService.get()
      .subscribe(data => this.Client = data);

    this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery = data);

    this.configurationService.get()
      .subscribe(data => this.Configs = data);

  }

  OnDelete(Id: number) {
    this.tableDataService.delete(Id).subscribe(data => this.LoggedClientsQuery = data);
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
  }


  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
      Bool: '',
    });
  }

  // form array add localDest
  fillClientConfiguration(): void {
    // this.arrayConfClient.clear();

    this.arrayConfClient = this.acc as FormArray;

    console.log(this.Configs);
    this.Configs.forEach(element => {

      this.arrayConfClient.push(this.createClientConfiguration());

    });


    /*this.arrayConfClient = this.acc as FormArray;
          this.ecf.get('arrayConfClient')['Bool'].at(1).patchValue(true)
    this.arrayConfClient.push(this.createClientConfiguration());*/
  }

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




    /*for (this.i=0; this.i <= this.Configs.length; this.i++)
    {
      if(this.acc['Bool'].at.value){
        this.myJob.IdClient = this.myClient.Id;
        this.myJob.IdConfiguration = this.i;
        this.jobService.post(this.myJob);
      }
    }*/



}
