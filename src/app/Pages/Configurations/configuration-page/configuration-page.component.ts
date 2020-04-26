import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../Services/Templates/DataService/ConfigurationService';
import { Configuration } from '../../../Models/Configuration.model'
/* Dialogy */
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {
  myConfiguration: Configuration;

  constructor(private dataService: ConfigurationService, private modalService: ModalService) { }

  ngOnInit(){
  }

  openModal(idDialog: string) {
    this.modalService.open(idDialog);
  }

  closeModal(idDialog: string) {
    this.modalService.close(idDialog);
  }

}
