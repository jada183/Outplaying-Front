import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/localApi/user.service';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() comment: Comment;
  user: User;
  rootPath = 'http://localhost:8080/file/profile-img/';
  imgURL = '';
  ngOnInit() {
    this.userService.getUserById(this.comment.idUser).subscribe(result => {
      this.user = result;
      if (result.urlImg !== undefined && result.urlImg !== null) {
        this.imgURL = this.rootPath + result.urlImg;
      }
    });
  }

}
