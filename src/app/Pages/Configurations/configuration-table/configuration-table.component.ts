import { Component, OnInit } from '@angular/core';
import { Configuration} from '../../../Models/Configuration.model';
import { ConfigurationService } from '../../../Services/Templates/DataService/ConfigurationService';
import {ModalService} from '../../../_modal';
import {ConfigurationDialogComponent} from '../configuration-dialog/configuration-dialog.component';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss']
})

export class ConfigurationTableComponent implements OnInit {
  headers = ['ID', 'Název', 'Popis', '', ''];
  Config: Configuration[];

  constructor(private dataService: ConfigurationService, private modalService: ModalService, private dialogueComponent: ConfigurationDialogComponent) { }

  ngOnInit(){
    this.dataService.get()
      .subscribe(data => this.Config = data);
  }


  OnDelete(Id: number)
  {
    this.dataService.delete(Id).subscribe( data => this.Config = data );
  }

  openModal(idDialog: string, IdConfig: number) {

    this.modalService.open(idDialog);

    this.dataService.get()
      .subscribe(data => this.Config = data);
    this.dialogueComponent.fillData();
  }


}
