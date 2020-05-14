import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Configuration} from '../../../Models/Configuration.model';
import {ConfigurationService} from '../../../Services/Templates/DataService/ConfigurationService';
import {ModalService} from '../../../_modal';

@Component({
  selector: 'app-configuration-dialog',
  templateUrl: './configuration-dialog.component.html',
  styleUrls: ['./configuration-dialog.component.scss']
})

export class ConfigurationDialogComponent implements OnInit {
  newConfigurationForm: FormGroup;
  arrayLocalDest: FormArray;
  arrayFtpDest: FormArray;
  arraySource: FormArray;

  myConfiguration: Configuration;
  configuration: Configuration[];




  constructor(private dataService: ConfigurationService, private modalService: ModalService, private fb: FormBuilder ) {

    this.newConfigurationForm = this.fb.group({

      configurationBasicSettings: this.fb.group({
        ConfigurationName: [''],
        BackupType: [''],
        FileType: ['', Validators.required],
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


  ngOnInit() {
    this.dataService.get()
      .subscribe(data => this.configuration = data);
  }

  // convenience getter for easy access to NewConfigurationForm fields
  get ncf() {
    return this.newConfigurationForm;
  }

  // convenience getter for easy access to ArrayLocalDest
  get ald() {
    return this.ncf.get('localDestination.arrayLocalDest');
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
    window.location.reload();

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

  FillData()
  {
    this.ncf.get('configurationBasicSettings.ConfigurationName').setValue('Ahoj');
    this.ncf.get('configurationBasicSettings.BackupType').setValue(this.myConfiguration.BackupType);
  }

  CreateConfig(): void{

    this.myConfiguration = this.configuration['1'];
    this.myConfiguration.Name = this.ncf.get('configurationBasicSettings.ConfigurationName').value;
    this.myConfiguration.SavedBackupNumber = this.ncf.get('configurationBasicSettings.MaxBackupsNumber').value;
    this.myConfiguration.Description = this.ncf.get('configurationBasicSettings.Description').value;
    this.myConfiguration.RepeatableBackup = false;
    this.myConfiguration.Cron = null;
    this.myConfiguration.BackupType  = this.ncf.get('configurationBasicSettings.BackupType').value;

    this.dataService.post(this.myConfiguration).subscribe(
      object => this.configuration.push(object));

  }

}
