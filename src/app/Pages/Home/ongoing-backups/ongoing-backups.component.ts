import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeQuery } from 'src/app/Models/Queries/HomeQuery';
import { HomeQueryService } from '../../../Services/Templates/DataService/Queries/HomeQueryService';

@Component({
  selector: 'app-ongoing-backups',
  templateUrl: './ongoing-backups.component.html',
  styleUrls: ['./ongoing-backups.component.scss']
})
export class OngoingBackupsComponent implements OnInit
{

  headers = ['Název Klienta', 'Název Konfigurage', 'Popis Konfigurace', ''];
  HomeQuery$: HomeQuery[];

  constructor(private dataService: HomeQueryService, private router: Router){}

  ngOnInit()
  {
      this.dataService.get()
      .subscribe(data => this.HomeQuery$ = data);
  }
}
