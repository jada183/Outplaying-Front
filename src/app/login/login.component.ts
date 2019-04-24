import { Component, OnInit } from '@angular/core';
import { Credentials } from '../model/credentials';
import { AuthenticationService } from '../services/localApi/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = {username: '', password: ''};
  constructor(private app: AuthenticationService, private router: Router) {}

  ngOnInit() {

  }
  login() {
    this.app.authenticate(this.credentials).subscribe(resp => {
      console.log(resp.headers);
    });
    return false;
  }
}
