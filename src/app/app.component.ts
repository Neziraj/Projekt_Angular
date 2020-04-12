import {Component, OnInit} from '@angular/core';
import { Admin } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  OnInit{
  admins$: Admin[];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
       this.dataService.getAdmins()
      .subscribe(data => this.admins$ = data);
  }
}
