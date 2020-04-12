import { Component, OnInit } from '@angular/core';
import { Admin } from './Admin/admin.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  Admins$: Admin[];

  constructor(private dataService: DataService) {}

  ngOnInit() 
  {
    return this.dataService.getAdmins()
    .subscribe(data => this.Admins$ = data);
  }
}
