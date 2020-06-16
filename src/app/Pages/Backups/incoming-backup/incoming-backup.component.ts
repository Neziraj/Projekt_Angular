import { Component, OnInit } from '@angular/core';
import {IncomingBackupsQuery} from '../../../Models/Queries/IncomingBackupsQuery';
import {IncomingBackupsQueryService} from '../../../Services/Templates/DataService/Queries/IncomingBackupsQueryService';

@Component({
  selector: 'app-incoming-backup',
  templateUrl: './incoming-backup.component.html',
  styleUrls: ['./incoming-backup.component.scss']
})
export class IncomingBackupComponent implements OnInit {
  IncomingBackupQuery: IncomingBackupsQuery[];
  headers = ['Datum', 'Název Klienta', 'Název Konfigurace', 'Popis konfigurace'];

  constructor(private dataService: IncomingBackupsQueryService) { }

  ngOnInit(){
    this.dataService.get()
      .subscribe(data => this.IncomingBackupQuery = data);
  }

}
