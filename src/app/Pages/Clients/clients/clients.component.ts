import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { ClientQuery } from '../../../Models/Queries/ClientQuery';
import { ClientQueryService } from 'src/app/Services/Templates/DataService/Queries/ClientQueryService';
import {LoggedClientsQuery} from '../../../Models/Queries/LoggedClientsQuery';
import {LoggedClientsQueryService} from '../../../Services/Templates/DataService/Queries/LoggedClientsQueryService';
import { ClientService } from 'src/app/Services/Templates/DataService/ClientService';
import { ConfigurationService } from 'src/app/Services/Templates/DataService/ConfigurationService';

/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl  } from  '@angular/forms';
import { Client } from 'src/app/Models/Client.model';
import {Configuration} from '../../../Models/Configuration.model';
import {Job} from "../../../Models/Job.model";
import {JobService} from "../../../Services/Templates/DataService/JobService";

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsTableComponent implements OnInit{
  editClientForm: FormGroup;
  arrayConfClient: FormArray;
  Configs: Configuration[];
  myClient: Client;
  myJob: Job;
  cliet: Client[];
  Jobs: Job[];
  LoggedClientsQuery$: LoggedClientsQuery[];
  clientQuery: ClientQuery[];


  headers = ['ID', 'Název', 'MAC', 'Konfigurace', '', ''];

  constructor(private tableDataService: ClientService, private configurationService: ConfigurationService, private dataService: LoggedClientsQueryService, router: Router, private modalService: ModalService, private fb: FormBuilder,
              private JobbyService: JobService, private clientQueryService: ClientQueryService) {
    this.editClientForm = this.fb.group({
      ClientName: [''],
      arrayConfClient: this.fb.array([])
    });
  }



  ngOnInit(){



    this.clientQueryService.get()
      .subscribe(data => this.clientQuery = data);

    this.JobbyService.get()
      .subscribe(data => this.Jobs = data)

    this.dataService.get()
      .subscribe(data => this.LoggedClientsQuery$ = data);

    this.configurationService.get()
      .subscribe(data => this.Configs = data);


  }


  OnDelete(Id: number) {
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


  // form array returns localDest
  createClientConfiguration(): FormGroup {
    return this.fb.group({
      Bool: '',
    });
  }

  // form array add localDest
  fillClientConfiguration():void{
    // this.arrayConfClient.clear();

    this.arrayConfClient = this.acc as FormArray;

    this.Configs.forEach(element => {

      this.arrayConfClient.push(this.createClientConfiguration());

    });



      /*this.arrayConfClient = this.acc as FormArray;
            this.ecf.get('arrayConfClient')['Bool'].at(1).patchValue(true)
      this.arrayConfClient.push(this.createClientConfiguration());*/
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

  private i: number;

  saveClientConfig()
  {
    this.myJob.IdConfiguration = null;
    this.myJob.IdClient = null;
    this.JobbyService.post(this.myJob).subscribe(
      data => this.Jobs.push(data));

    /*for (this.i=0; this.i <= this.Configs.length; this.i++)
    {
      if(this.acc['Bool'].at.value){
        this.myJob.IdClient = this.myClient.Id;
        this.myJob.IdConfiguration = this.i;
        this.jobService.post(this.myJob);
      }
    }*/
  }
}
