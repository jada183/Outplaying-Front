import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Credentials } from '../../model/credentials';
import { Observable } from 'rxjs';
import { LinkerService } from '../linker.service';
import { GenericRequest } from '../../model/generic-model-request';
import { tap } from 'rxjs/operators';
import { StorageAppService } from '../storage-app.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;
  constructor(
    private linkerService: LinkerService,
    private storage: StorageAppService,
    private jwtHelper: JwtHelperService
  ) {}
  authenticate(credentials: Credentials): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign('auth/', {}),
      null,
      { username: credentials.username, password: credentials.password }
    );
    return this.linkerService.postModelAuthentication(genericRequest);
  }

  isAuthenticated(): boolean {
    const token = this.storage.obtenerValor('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
