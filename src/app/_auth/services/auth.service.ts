import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { TemplateDataService } from './../../Services/Template.data.service';
import { Tokens } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) {}
  URL = 'http://localhost:49497/api/auth';

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.URL + '/create/?email=' + username + '&password=' + password)
      .pipe(
        tap(tokens => this.doLoginUser(username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  /*logout() {
    return this.http.post<any>(`${TemplateDataService.URL}/logout`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }*/

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, jwtToken: string) {
    this.loggedUser = username;
    this.storeJwtToken(jwtToken);
  }

   doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private storeJwtToken(jwtToken: string) {
    localStorage.setItem(this.JWT_TOKEN, jwtToken);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}