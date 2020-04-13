import { Component, OnInit } from '@angular/core';
import {BackupDataService} from '../../../Services/backup.data.service';
import {Job} from '../../../Models/Job.model';
import {Shedule} from '../../../Models/Shedule.model';


@Component({
  selector: 'app-backups-page',
  templateUrl: './backups-page.component.html',
  styleUrls: ['./backups-page.component.scss']
})
export class BackupsPageComponent implements OnInit {
  Shedule$: Shedule[];
  Job$: Job[];

  constructor(private dataService: BackupDataService) { }

  ngOnInit(){

    return this.dataService.getShedule()
      .subscribe(data => this.Shedule$ = data);
  }

}
