import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../Services/Templates/DataService/ConfigurationService';
import { Configuration } from '../../../Models/Configuration.model'
/* Dialogy */
import { ModalService } from 'src/app/_modal';
import { FormGroup, Validators, FormBuilder } from  '@angular/forms';


@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {
  newConfigurationForm: FormGroup;
  myConfiguration: Configuration;

  constructor(private dataService: ConfigurationService, private modalService: ModalService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.newConfigurationForm = this.formBuilder.group({

      configurationBasicSettings: this.formBuilder.group({
        ConfigurationName: ['', Validators.required],
        BackupType: ['', Validators.required],
        FileType: ['', Validators.required],
        MaxBackupsNumber: ['', Validators.required],
        Description: ['', Validators.required],
      }),

      localDestination: this.formBuilder.group({
        Path: ['', Validators.required],
      }),

      ftpDestination: this.formBuilder.group({
        Path: ['', Validators.required],
        Site: ['', Validators.required],
        Password: ['', Validators.required],
        Login: ['', Validators.required],
        Port: ['', Validators.required],
      }),

      source: this.formBuilder.group({
        Path: ['', Validators.required],
      })
    })
  }

  // convenience getter for easy access to NewConfigurationForm fields
  get ncf() { return this.newConfigurationForm; }

  openModal(idDialog: string) {
    this.modalService.open(idDialog);
    //set value works
    this.ncf.get('configurationBasicSettings.ConfigurationName').setValue('set value works')
    
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);;
  }

}
