import { Component, OnInit } from '@angular/core';
import {Job} from '../../../Models/Job.model';
import {Schedule} from '../../../Models/Shedule.model';


@Component({
  selector: 'app-completed-backup',
  templateUrl: './completed-backup.component.html',
  styleUrls: ['./completed-backup.component.scss']
})
export class CompletedBackupComponent implements OnInit {
  Shedule$: Schedule[];
  Job$: Job[];

  constructor() {
  }

  ngOnInit(){
  }
}
