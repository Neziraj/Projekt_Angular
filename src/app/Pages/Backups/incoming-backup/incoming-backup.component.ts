import { Component, OnInit } from '@angular/core';
import {Job} from '../../../Models/Job.model';
import {Schedule} from '../../../Models/Shedule.model';


@Component({
  selector: 'app-incoming-backup',
  templateUrl: './incoming-backup.component.html',
  styleUrls: ['./incoming-backup.component.scss']
})
export class IncomingBackupComponent implements OnInit {
  Shedule$: Schedule[];
  Job$: Job[];

  constructor() { }

  ngOnInit(){
  }

}
