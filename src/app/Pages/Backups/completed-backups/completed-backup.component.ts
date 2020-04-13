import { Component, OnInit } from '@angular/core';
import {BackupDataService} from '../../../Services/backup.data.service';
import {Job} from '../../../Models/Job.model';
import {Shedule} from '../../../Models/Shedule.model';


@Component({
  selector: 'app-completed-backup',
  templateUrl: './completed-backup.component.html',
  styleUrls: ['./completed-backup.component.scss']
})
export class CompletedBackupComponent implements OnInit {
  Shedule$: Shedule[];
  Job$: Job[];

  constructor(private dataService: BackupDataService) { }

  ngOnInit(){

    return this.dataService.getShedule()
      .subscribe(data => this.Shedule$ = data);
  }

}
