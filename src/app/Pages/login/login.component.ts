import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  /*
  isLoginErro: Boolean = false;
  */
  constructor(router: Router, private formBuilder: FormBuilder ) {
  }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  OnSubmit(email, password) {
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
