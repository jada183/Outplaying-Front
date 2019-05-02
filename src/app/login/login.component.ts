import { Component, OnInit, Output } from '@angular/core';
import { Credentials } from '../model/credentials';
import { AuthenticationService } from '../services/localApi/authentication.service';
import { Router } from '@angular/router';
import { LinkerService } from '../services/linker.service';
import { StorageAppService } from '../services/storage-app.service';
import { EventEmitter } from 'events';
import { SharedService } from '../services/shared.service';
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
    private sharedService: SharedService
  ) {}

  ngOnInit() {}
  login() {
    this.app.authenticate(this.credentials).subscribe(resp => {
      const token  = resp.headers.get('Authorization').split('Bearer');
      this.storage.guardarValor('token', token[1] );
      this.sharedService.emitChange('true');
      this.router.navigate(['/noticias']);
    });

    return false;
  }
}
