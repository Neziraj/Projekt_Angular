import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeQuery } from 'src/app/Models/Queries/HomeQuery';

@Component({
  selector: 'app-ongoing-backups',
  templateUrl: './ongoing-backups.component.html',
  styleUrls: ['./ongoing-backups.component.scss']
})
export class OngoingBackupsComponent implements OnInit
{
  HomeQuery$: HomeQuery[];
  headers = ['Název Klienta', 'Název Konfigurage', 'Popis Konfigurace', ''];

  constructor(router: Router){}

  ngOnInit()
  {
  }
}
