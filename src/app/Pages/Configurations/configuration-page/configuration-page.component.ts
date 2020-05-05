import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../Services/Templates/DataService/ConfigurationService';
import { Configuration } from '../../../Models/Configuration.model';
import { ConfigurationDialogComponent} from '../configuration-dialog/configuration-dialog.component';
/* Dialogy */
import { ModalService } from 'src/app/_modal';

import { FormGroup, Validators, FormBuilder, FormArray  } from  '@angular/forms';


@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {
  newConfigurationForm: FormGroup;
  arrayLocalDest: FormArray;
  arrayFtpDest: FormArray;
  arraySource: FormArray;

  myConfiguration: Configuration;

  constructor(private dataService: ConfigurationService, private modalService: ModalService, private fb: FormBuilder) { }

  ngOnInit(){
    this.newConfigurationForm = this.fb.group({

      configurationBasicSettings: this.fb.group({
        ConfigurationName: ['', Validators.required],
        BackupType: ['', Validators.required],
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
        arrayLocalDest: this.fb.array([ this.createLocalDest() ])
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

  // convenience getter for easy access to NewConfigurationForm fields
  get ncf() { return this.newConfigurationForm; }

  // convenience getter for easy access to ArrayLocalDest
  get ald() { return this.ncf.get('localDestination.arrayLocalDest'); }


  openModal(idDialog: string) {
    this.modalService.open(idDialog);
    // set value works
    this.ncf.get('configurationBasicSettings.ConfigurationName').setValue('set value works');

  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
    console.warn(this.ncf.get('configurationBasicSettings.ConfigurationName').value);
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
}
