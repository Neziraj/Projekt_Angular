import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser: any;
  //showNavBar: boolean;
  
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  showToken(){
    console.log(this.authenticationService.getJwtToken());
  }

  showNavBar(): boolean{
  return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.doLogoutUser();
    this.router.navigate(['/login']);
    //this.authenticationService.login('XX@sssvt.cz', '123456')
  }

  ngOnInit()
  {
  }

}


