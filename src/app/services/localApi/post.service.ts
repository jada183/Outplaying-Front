import { Injectable } from '@angular/core';
import { LinkerService } from '../linker.service';
import { GenericRequest } from '../../model/generic-model-request';
import { StorageAppService } from '../storage-app.service';
import { Post } from '../../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private linkerService: LinkerService,
    private storage: StorageAppService) { }

  // posiblemente no se use.
  getPostById(idPost: number): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign(`post/${idPost}`, {})
    );
    return this.linkerService.getModel(genericRequest);
  }

  getPostByUserLogin(): Observable<any> {
    const idUserOwner = this.storage.obtenerValor('idUser');
    const genericRequest = new GenericRequest(
      Object.assign(`post/user/${idUserOwner}`, {})
    );
    return this.linkerService.getModel(genericRequest);
  }
}
