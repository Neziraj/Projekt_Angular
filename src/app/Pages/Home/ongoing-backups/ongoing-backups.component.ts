import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageDataService } from 'src/app/Services/home.page.data.service';
import { HomeQuery } from 'src/app/Models/Queries/HomeQuery';

@Component({
  selector: 'app-ongoing-backups',
  templateUrl: './ongoing-backups.component.html',
  styleUrls: ['./ongoing-backups.component.scss']
})
export class OngoingBackupsComponent implements OnInit {
  HomeQuery$: HomeQuery[];
  headers = ['Název Klienta', 'Název Konfigurage', 'Popis Konfigurace'];

  constructor(private dataService: HomePageDataService, private router: Router){}

ngOnInit()
{
    this.dataService.getQuery()
    .subscribe(data => this.HomeQuery$ = data);
}
}
