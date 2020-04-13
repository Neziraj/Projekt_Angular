import { Component, OnInit } from '@angular/core';
import {BackupDataService} from '../../../Services/backup.data.service';
import {Job} from '../../../Models/Job.model';
import {Shedule} from '../../../Models/Shedule.model';


@Component({
  selector: 'app-incoming-backup',
  templateUrl: './incoming-backup.component.html',
  styleUrls: ['./incoming-backup.component.scss']
})
export class IncomingBackupComponent implements OnInit {
  Shedule$: Shedule[];
  Job$: Job[];

  constructor(private dataService: BackupDataService) { }

  ngOnInit(){

    return this.dataService.getShedule()
      .subscribe(data => this.Shedule$ = data);
  }

}
