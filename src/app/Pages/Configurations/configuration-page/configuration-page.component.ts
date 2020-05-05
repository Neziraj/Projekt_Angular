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


  constructor(private dataService: ConfigurationService, private modalService: ModalService, private fb: FormBuilder) { }

  ngOnInit(){

    }

  // convenience getter for easy access to NewConfigurationForm fields
  get ncf() { return this.newConfigurationForm; }

  // convenience getter for easy access to ArrayLocalDest
  get ald() { return this.ncf.get('localDestination.arrayLocalDest') }

  // convenience getter for easy access to ArrayLocalDest at selected index
  // tslint:disable-next-line:max-line-length
  get aldAt() { return this.ncf.get('localDestination.arrayLocalDest').get(this.ncf.get('configurationBasicSettings.ConfigurationName').value) }

  openModal(idDialog: string) {
    this.modalService.open(idDialog);
    // set value works
    this.ncf.get('configurationBasicSettings.ConfigurationName').setValue('set value works');


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
    this.arrayLocalDest = this.ald as FormArray;
    this.arrayLocalDest.push(this.createLocalDest());
  }

  // form array remove localDest
  removeAtLocalDest(): void {
    this.arrayLocalDest = this.ald as FormArray;

    this.arrayLocalDest.removeAt(this.ncf.get('localDestination.SelectedLocalDest').value);

    this.ncf.get('localDestination.SelectedLocalDest').setValue(this.ncf.get('localDestination.SelectedLocalDest').value - 1)
    
  }
}
