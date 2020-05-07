import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  currentUser: any;
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  /*logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }*/

  ngOnInit()
  {
  }

}


