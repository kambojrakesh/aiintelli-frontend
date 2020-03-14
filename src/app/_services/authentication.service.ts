import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

      return this.http.get<AuthenticationBean>(
      'http://login-intelli-ms-login.apps.us-east-2.starter.openshift-online.com/token', {
        headers
      }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', `${data.token}`);
          return data;
        }
      )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  userLogout() {
    sessionStorage.removeItem('authenticatedUser');    
    sessionStorage.removeItem('token');
  }
  getAuthenticatedUser(){
      return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken(){
    return sessionStorage.getItem('token');
  }
}

export class AuthenticationBean{
  token: any;
  constructor(public message:string) { }
}