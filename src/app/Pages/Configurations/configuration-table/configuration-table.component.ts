import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Configuration.model';
import { ConfigurationService } from '../../../Services/Templates/DataService/ConfigurationService';
import {ModalService} from '../../../_modal';

import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Source} from '../../../Models/Source.model';
import {DestLocal} from '../../../Models/DestLocal.model';
import {DestLocalService} from '../../../Services/Templates/DataService/DestLocalService';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss']
})

export class ConfigurationTableComponent implements OnInit {
  headers = ['ID', 'Název', 'Popis', '', ''];
  Config: Configuration[];
  DestinationLocal: DestLocal[];

  newConfigurationForm: FormGroup;
  arrayLocalDest: FormArray;
  arrayFtpDest: FormArray;
  arraySource: FormArray;

  myConfiguration: Configuration;
  myLocal: DestLocal;

  constructor( private dataService: ConfigurationService, private modalService: ModalService, private fb: FormBuilder, private localService: DestLocalService) {

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
        Path: ['', Validators.required],
        Site: ['', Validators.required],
        Password: ['', Validators.required],
        Login: ['', Validators.required],
        Port: ['', Validators.required],
      }),

      source: this.fb.group({
        Path: ['', Validators.required],
      })
    });
  }

  ngOnInit(){

    return this.dataService.get()
      .subscribe(data => this.Config = data);

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

    this.ncf.get('localDestination.SelectedLocalDest').setValue(this.ncf.get('localDestination.SelectedLocalDest').value - 1);

  }

  fillData()
  {
    this.ncf.get('configurationBasicSettings.ConfigurationName').patchValue(this.myConfiguration.Name);
    this.ncf.get('configurationBasicSettings.BackupType').patchValue(this.myConfiguration.BackupType);
    this.ncf.get('configurationBasicSettings.Description').setValue(this.myConfiguration.Description);
    this.ncf.get('configurationBasicSettings.MaxBackupsNumber').setValue(this.myConfiguration.SavedBackupNumber);
    this.ncf.get('localDestination.FileType').setValue(this.myLocal.FileSuffix);
    this.ncf.get('localDestination.SelectedLocalDest').setValue(this.myLocal.IdDestSource);
  }

  OnDelete(Id: number)
  {
    this.dataService.delete(Id).subscribe( data => this.Config = data );
  }

  openModal(idDialog: string, Config: Configuration, locl: DestLocal) {

    this.modalService.open(idDialog);
    this.myConfiguration = Config;
    this.myLocal = locl;
    this.fillData();

  }

}
