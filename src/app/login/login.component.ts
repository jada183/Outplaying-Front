import { Component, OnInit } from '@angular/core';
import { Credentials } from '../model/credentials';
import { AuthenticationService } from '../services/localApi/authentication.service';
import { Router } from '@angular/router';
import { LinkerService } from '../services/linker.service';
import { StorageAppService } from '../services/storage-app.service';
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
    private storage: StorageAppService
  ) {}

  ngOnInit() {}
  login() {
    this.app.authenticate(this.credentials).subscribe(resp => {
      const token  = resp.headers.get('Authorization').split('Bearer');
      this.storage.guardarValor('token', token[1] );
      this.router.navigate(['/noticias']);
    });

    return false;
  }
}
