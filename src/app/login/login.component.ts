import { Component, OnInit, Output } from '@angular/core';
import { Credentials } from '../model/credentials';
import { AuthenticationService } from '../services/localApi/authentication.service';
import { Router } from '@angular/router';
import { LinkerService } from '../services/linker.service';
import { StorageAppService } from '../services/storage-app.service';
import { EventEmitter } from 'events';
import { SharedService } from '../services/shared.service';
import { UserService } from '../services/localApi/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = { username: '', password: '' };
  constructor(
    private app: AuthenticationService,
    private router: Router,
    private linker: LinkerService,
    private storage: StorageAppService,
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit() {}
  login() {
    this.app.authenticate(this.credentials).subscribe(resp => {
      const token  = resp.headers.get('Authorization').split('Bearer');
      this.storage.guardarValor('token', token[1] );
      this.sharedService.emitChange('true');
      const idUser = resp.headers.get('idUSer');
      this.storage.guardarValor('idUser', idUser);
      this.router.navigate(['/noticias']);
      /**
      this.userService.getUserById(idUser).subscribe(response => {
        this.userService.setUserAuthenticated(response);
        this.router.navigate(['/noticias']);
      }
    );*/

    }, () => {
      // to change
      alert('Invalid credentials');
    });

    return false;
  }
}
