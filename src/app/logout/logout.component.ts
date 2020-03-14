import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  logoutMessage = "You are logout Successfully!!";

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.userLogout();
  }

}
