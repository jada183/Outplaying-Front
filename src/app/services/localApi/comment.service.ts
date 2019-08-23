import { Injectable } from '@angular/core';
import { GenericRequest } from '../../model/generic-model-request';
import { LinkerService } from '../linker.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private linkerService: LinkerService) {}
  getCommentsByPostId(
    postId: Number,
    commentPage: Number,
    commentPageSize: Number
  ): Observable<any> {
    const genericRequest = new GenericRequest(
      Object.assign(
        `comments/post/` +
          postId +
          `?page=` +
          commentPage +
          `&size=` +
          commentPageSize,
        {}
      )
    );
    return this.linkerService.getModelWithoutToken(genericRequest);
  }
}
