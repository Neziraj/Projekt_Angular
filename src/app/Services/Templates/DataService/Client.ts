import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../../Models/Client.model';



export class  ClientService {
  constructor(private http: HttpClient) { }
}
