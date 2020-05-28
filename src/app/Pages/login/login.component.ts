import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from  '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/_auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private authenticationService: AuthService) {
    // redirect to home if already logged in
    /*if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }*/
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    // get return url from route parameters or default to '/'
    this.returnUrl = '/clients';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    /*if (this.loginForm.invalid) {
      return;
    }*/

    this.loading = true;
    //this.authenticationService.login(this.f.username.value, this.f.password.value)
    this.authenticationService.login('@gmail.com', 'jfůsdakfla')
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });

  console.log(this.f.username.value + ',' + this.f.password.value)

    //this.authenticationService.storeJwtToken('');
  }

  /*OnSubmit(email, password) {
    console.log("TEst");
    /*this.service.userAuthentication(email, password).subscribe((data : any) => {
      localStorage.setItem('userToken', data.acces_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse) => {
      this.isLoginErro = true;
    });
  }*/
}
