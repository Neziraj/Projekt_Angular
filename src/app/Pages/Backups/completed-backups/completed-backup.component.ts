import { Component, OnInit } from '@angular/core';
import { HomeQuery} from '../../../Models/Queries/HomeQuery';
import {HomeQueryService} from '../../../Services/Templates/DataService/Queries/HomeQueryService';
import {CompletedBackupsQueryService} from '../../../Services/Templates/DataService/Queries/CompletedBackupsQueryService';
import {CompletedBackupsQuery} from '../../../Models/Queries/CompletedBackupsQuery';


@Component({
  selector: 'app-completed-backup',
  templateUrl: './completed-backup.component.html',
  styleUrls: ['./completed-backup.component.scss']
})
export class CompletedBackupComponent implements OnInit {
  CompletedBackupQuery: CompletedBackupsQuery[];

  headers = ['Datum', 'Název Klienta', 'Název Konfigurace', 'Popis', 'Průběh'];
  constructor(private dataService: CompletedBackupsQueryService) {
  }

  ngOnInit(){
    this.dataService.get()
      .subscribe(data => this.CompletedBackupQuery = data);
  }
}
