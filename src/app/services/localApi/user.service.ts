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
  updateUser(user: any): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign(`users`, {}),
      null,
      user
    );
    return this.linkerService.putModel(genericRequest);
  }
  updatePassword(credential: any) {
    const genericRequest = new GenericRequest(
      Object.assign(`credentials/password`, {}),
      null,
      credential
    );
    return this.linkerService.putModel(genericRequest);
  }
}
