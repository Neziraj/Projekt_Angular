import { Component, OnInit } from '@angular/core';
import {CompletedBackupComponent} from '../completed-backups/completed-backup.component';

@Component({
  selector: 'app-backup-navbar',
  templateUrl: './navbar.backup.component.html',
  styleUrls: ['./navbar.backup.component.scss']
})

export class NavbarBackupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
