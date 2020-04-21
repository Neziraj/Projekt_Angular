import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { debuglog } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /*
  isLoginErro: Boolean = false;
  */
  constructor(router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(email, password)
  {
    /*
    console.log("TEst");
    /*this.service.userAuthentication(email, password).subscribe((data : any) => {
      localStorage.setItem('userToken', data.acces_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse) => {
      this.isLoginErro = true;
    });*/
  }

}
