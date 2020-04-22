import { Component, OnInit } from '@angular/core';
import {NewClientsQueryService} from '../../../Services/Templates/DataService/Queries/NewClientsQueryService';
import {NewClientsQuery} from '../../../Models/Queries/NewClientsQuery';


@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  NewClientsQuery$: NewClientsQuery[];

  headers = ['Datum', 'Název', '', ''];
  constructor(private dataService: NewClientsQueryService) { }

  ngOnInit(){
    return this.dataService.get()
      .subscribe(data => this.NewClientsQuery$ = data);
  }

}
