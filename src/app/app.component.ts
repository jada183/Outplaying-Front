import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/localApi/authentication.service';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private app: AuthenticationService, private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe( d => {
      this.logIn = this.app.isAuthenticated();
    });
  }
  title = 'OutPlaying';
  logIn = false;
  ngOnInit() {
    this.logIn = this.app.isAuthenticated();
  }
  logInSuccess(log: string) {
    this.logIn = true;
  }
}
