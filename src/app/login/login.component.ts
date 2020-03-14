import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isValidLogin = false;
  errorMessage = 'Please use correct credentials!!';
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['welcome'])
    }
    
  }

  login() {
    this.authenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome'])
        this.isValidLogin = false
      },
      error => {
        console.log(error)
        this.isValidLogin = true
      }
    )
  }

}
