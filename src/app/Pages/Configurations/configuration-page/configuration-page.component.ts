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

  configuration: Configuration[];

  constructor(private dataService: ConfigurationService, private modalService: ModalService, private fb: FormBuilder) { }

  ngOnInit(){

    this.dataService.get()
      .subscribe(data => this.configuration = data);

  }


  openModal(idDialog: string) {

    this.modalService.open(idDialog);

  }


}
