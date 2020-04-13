import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/Job.model';
import { Router } from '@angular/router';
import { HomePageDataService } from 'src/app/Services/home.page.data.service';
import { Client } from 'src/app/Models/Client.model';
import { Configuration } from 'src/app/Models/Config.model';

@Component({
  selector: 'app-ongoing-backups',
  templateUrl: './ongoing-backups.component.html',
  styleUrls: ['./ongoing-backups.component.scss']
})
export class OngoingBackupsComponent implements OnInit {
  Job$: Job[];
  Client$: Client[];
  Configuration$: Configuration[];
  headers = ['Název Klienta', 'Název Konfigurage', 'Popis Konfigurace'];

  constructor(private dataService: HomePageDataService, private router: Router){}

ngOnInit()
{
    this.dataService.getJob()
      .subscribe(data => this.Job$ = data);

    this.dataService.getClient()
    .subscribe(data => this.Client$ = data);

    this.dataService.getConfiguration()
    .subscribe(data => this.Configuration$ = data)
}

}