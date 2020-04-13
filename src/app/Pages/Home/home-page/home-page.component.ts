import { Component, OnInit } from '@angular/core';
import {Client} from '../../../Models/Client.model';
import {Job} from '../../../Models/Job.model';
import {Shedule} from '../../../Models/Shedule.model';
import {HomePageDataService} from '../../../Services/home.page.data.service';
import {ClientPageComponent} from '../../Clients/client-page/client-page.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Clients$: Client[];
  Job$: Job[];
  Shedule$: Shedule[];
  headers = ['ID', 'Name', 'DateOfLogin'];

  constructor(private dataService: HomePageDataService,
              private router: Router){}

ngOnInit()
{
    return this.dataService.getClient()
      .subscribe(data => this.Clients$ = data);
}

}
