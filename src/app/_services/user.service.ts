import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(httpBody: HttpParams) {
    return this.http.post(`http://login-intelli-ms-login.apps.us-east-2.starter.openshift-online.com/signup`, httpBody);
  }

}
