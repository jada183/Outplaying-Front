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
  constructor(
    private linkerService: LinkerService,
    private storage: StorageAppService
  ) {}

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
      Object.assign(`post/user`, {})
    );
    return this.linkerService.getModel(genericRequest);
  }
  getAllPaginated(page: Number, size: Number): Observable<any> {

    const genericRequest = new GenericRequest(
      Object.assign(`post/paginated?page=` + page + `&size=` + size, {})
    );
    return this.linkerService.getModelWithoutToken(genericRequest);
  }
  createPost(post: any): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign(`post`, {}),
      null,
      post
    );
    return this.linkerService.postModel(genericRequest);
  }

  updatePost(post: any): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign(`post`, {}),
      null,
      post
    );
    return this.linkerService.putModel(genericRequest);
  }

  deleteByPostId(idPost: number): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign(`post/${idPost}`, {})
    );
    return this.linkerService.deleteModel(genericRequest);
  }
}
