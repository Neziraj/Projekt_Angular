import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/Job.model';
import { Router } from '@angular/router';
import { HomePageDataService } from 'src/app/Services/home.page.data.service';

@Component({
  selector: 'app-ongoing-backups',
  templateUrl: './ongoing-backups.component.html',
  styleUrls: ['./ongoing-backups.component.scss']
})
export class OngoingBackupsComponent implements OnInit {
  Job$: Job[];
  headers = ['Název Klienta', 'Název Konfigurage', 'Popis Konfigurace'];

  constructor(private dataService: HomePageDataService, private router: Router){}

ngOnInit()
{
    return this.dataService.getJob()
      .subscribe(data => this.Job$= data);
}

}