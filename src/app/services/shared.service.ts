import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  selectedPost: Post;
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}
