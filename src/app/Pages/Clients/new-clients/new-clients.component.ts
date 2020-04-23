import { Component, OnInit } from '@angular/core';
import {NewClientsQueryService} from '../../../Services/Templates/DataService/Queries/NewClientsQueryService';
import {NewClientsQuery} from '../../../Models/Queries/NewClientsQuery';

import { ModalService } from 'src/app/_modal';


@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  NewClientsQuery$: NewClientsQuery[];
  bodyText: string;

  headers = ['Datum', 'Název', '', ''];
  constructor(private dataService: NewClientsQueryService, private modalService: ModalService) { }

  ngOnInit(){
    this.bodyText = 'This text can be updated in modal 1';
    return this.dataService.get()
      .subscribe(data => this.NewClientsQuery$ = data);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
