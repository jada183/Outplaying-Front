import { Injectable } from '@angular/core';
import { LinkerService } from '../linker.service';
import { Observable } from 'rxjs';
import { GenericRequest } from '../../model/generic-model-request';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private linkerService: LinkerService) {}
  idUser: number;
  userAuthenticated: User;
  getUserById(idUser: any): Observable<any> {
    this.idUser = idUser;
    const genericRequest = new GenericRequest(
      Object.assign(`users/${idUser}`, {})
    );
    return this.linkerService.getModel(genericRequest);
  }
  getUserAuthenticated(): User {
    return this.userAuthenticated;
  }
  setUserAuthenticated(user: any) {
    this.userAuthenticated = user;
  }
}
