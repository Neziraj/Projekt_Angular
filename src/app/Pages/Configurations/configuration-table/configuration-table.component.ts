import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Configuration.model';
import { ConfigurationService } from '../../../Services/Templates/DataService/ConfigurationService';
import {ModalService} from '../../../_modal';

import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Source} from '../../../Models/Source.model';
import {DestLocal} from '../../../Models/DestLocal.model';
import {DestLocalService} from '../../../Services/Templates/DataService/DestLocalService';
import {SourceService} from '../../../Services/Templates/DataService/SourceService';
import {DestFtp} from '../../../Models/DestFtpServer.model';
import {DestFtpServerService} from '../../../Services/Templates/DataService/DestFtpServerService';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss']
})

export class ConfigurationTableComponent implements OnInit {
  headers = ['ID', 'Název', 'Popis', '', ''];

  Config: Configuration[];
  myConfiguration: Configuration;

  Local: DestLocal[];
  myLocal: DestLocal;

  Source: Source[];
  mySource: Source;

  FTP: DestFtp[];
  myFTP: DestFtp;

  DestinationLocal: DestLocal[];

  newConfigurationForm: FormGroup;
  arrayLocalDest: FormArray;
  arrayFtpDest: FormArray;
  arraySource: FormArray;

  constructor(
    private dataService: ConfigurationService,
    private modalService: ModalService,
    private fb: FormBuilder,
    private localService: DestLocalService,
    private sourceService: SourceService,
    private FTPService: DestFtpServerService
  )
  {
    this.newConfigurationForm = this.fb.group({

      configurationBasicSettings: this.fb.group({
        ConfigurationName: ['', Validators.required],
        BackupType: ['', Validators.required],
        MaxBackupsNumber: ['', Validators.required],
        Description: ['', Validators.required],
      }),


      recurrencePicker: this.fb.group({
        StartDate: ['', Validators.required],
        Time: ['', Validators.required],
        Interval: ['', Validators.required],
        IntervalUnits: ['', Validators.required],

        WeekInterval: this.fb.group({
          Monday: ['', Validators.required],
          Tuesday: ['', Validators.required],
          Wednesday: ['', Validators.required],
          Thursday: ['', Validators.required],
          Friday: ['', Validators.required],
          Saturday: ['', Validators.required],
          Sunday: ['', Validators.required],
        }),

        MonthInterval: this.fb.group({
          SpecifiedDay: ['', Validators.required],
        })
      }),

      localDestination: this.fb.group({
        Bool: ['', Validators.required],
        FileType: [''],
        Path: [''],
        SelectedLocalDest: ['', Validators.required],
        arrayLocalDest: this.fb.array([this.createLocalDest()])
      }),

      ftpDestination: this.fb.group({
        Bool: ['', Validators.required],
        SelectedFtpDest: ['', Validators.required],
        Site: ['', Validators.required],
        Password: ['', Validators.required],
        Login: ['', Validators.required],
        Port: ['', Validators.required],
        TransferMode: ['', Validators.required],
        Encryption: ['', Validators.required],
      }),

      source: this.fb.group({
        Path: ['', Validators.required],
      })
    });
  }

  ngOnInit(){

    this.dataService.get()
      .subscribe(data => this.Config = data);

    this.sourceService.get()
      .subscribe(data => this.Source = data);

    this.FTPService.get()
      .subscribe(data => this.FTP = data);

    this.localService.get()
      .subscribe(data => this.DestinationLocal = data);


  }

  get ncf() {
    return this.newConfigurationForm;
  }

  // convenience getter for easy access to ArrayLocalDest
  get ald() {
    return this.ncf.get('localDestination.arrayLocalDest');
  }

  closeModal(idDialog: string) {

    this.modalService.close(idDialog);

  }

  /*-----------------*/
  /*methods for array*/
  /*-----------------*/

  // form array returns localDest
  createLocalDest(): FormGroup {
    return this.fb.group({
      Path: '',
    });
  }

  // form array add localDest
  addLocalDest(): void {
    this.arrayLocalDest = this.ncf.get('localDestination.arrayLocalDest') as FormArray;
    this.arrayLocalDest.push(this.createLocalDest());
  }

  // form array remove localDest
  removeAtLocalDest(): void {
    this.arrayLocalDest = this.ncf.get('localDestination.arrayLocalDest') as FormArray;

    this.arrayLocalDest.removeAt(this.ncf.get('localDestination.SelectedLocalDest').value);

    this.ncf.get('localDestination.SelectedLocalDest').patchValue(this.ncf.get('localDestination.SelectedLocalDest').value - 1);

  }

  fillData()
  {
    this.ncf.get('configurationBasicSettings.ConfigurationName').patchValue(this.myConfiguration.Name);
    this.ncf.get('configurationBasicSettings.BackupType').patchValue(this.myConfiguration.BackupType);
    this.ncf.get('configurationBasicSettings.Description').patchValue(this.myConfiguration.Description);
    this.ncf.get('configurationBasicSettings.MaxBackupsNumber').patchValue(this.myConfiguration.SavedBackupNumber);


    this.Source.forEach( element => {
      if (this.myConfiguration.Id === element.IdConfiguration) {
        this.ncf.get('source.Path').patchValue(element.Path);
      }});

    this.FTP.forEach( element => {
      if (this.myConfiguration.Id === element.IdConfiguration) {
        this.ncf.get('ftpDestination.Login').patchValue(element.Login);
        this.ncf.get('ftpDestination.Port').patchValue(element.Port);
        this.ncf.get('ftpDestination.Site').patchValue(element.Site);
        this.ncf.get('ftpDestination.Password').setValue(element.Password);
        this.ncf.get('ftpDestination.TransferMode').setValue(element.TransferMode);
        this.ncf.get('ftpDestination.Encryption').setValue(element.Encryption);
      }});

    this.Local.forEach( element => {
      if (this.myConfiguration.Id === element.IdConfiguration) {
        this.ncf.get('localDestination.Path').patchValue(element.Path);
        this.ncf.get('localDestination.FileType').patchValue(element.FileSuffix);
      }});


  }

  OnDelete(Id: number)
  {
    this.dataService.delete(Id).subscribe( data => this.Config = data );
  }

  // tslint:disable-next-line:no-shadowed-variable
  openModal(idDialog: string, Config: Configuration) {

    this.modalService.open(idDialog);
    this.myConfiguration = Config;

    this.fillData();

  }
  Save()
  {

    this.myConfiguration.Name = this.ncf.get('configurationBasicSettings.ConfigurationName').value;
    this.myConfiguration.BackupType = this.ncf.get('configurationBasicSettings.BackupType').value;
    this.myConfiguration.Description = this.ncf.get('configurationBasicSettings.Description').value;
    this.myConfiguration.SavedBackupNumber = this.ncf.get('configurationBasicSettings.MaxBackupsNumber').value;

    this.dataService.put(this.myConfiguration)
      .subscribe(data => this.myConfiguration = data);


    this.FTP.forEach( element => {
      if (this.myConfiguration.Id === element.IdConfiguration) {
        this.myFTP.Password =  this.ncf.get('ftpDestination.Password').value;
        this.myFTP.Site =  this.ncf.get('ftpDestination.Site').value;
        this.myFTP.Login =  this.ncf.get('ftpDestination.Login').value;
        this.myFTP.Port =  this.ncf.get('ftpDestination.Port').value;
        this.myFTP.TransferMode =  this.ncf.get('ftpDestination.TransferMode').value;
        this.myFTP.Encryption =  this.ncf.get('ftpDestination.Encryption').value;
      }});
    this.FTPService.put(this.myFTP)
      .subscribe(data => this.myFTP = data);

    this.mySource.Path = this.ncf.get('source.Path').value;

    /*
        this.sourceService.put(this.mySource)
        .subscribe(data => this.mySource = data);
    */
    /*
        this.myLocal.Path = this.ncf.get('localDestination.FileType').value;
     */
  }

}
