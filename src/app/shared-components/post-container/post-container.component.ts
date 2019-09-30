import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../model/post';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PostService } from '../../services/localApi/post.service';
import { ConfirmarComponent } from '../../dialogs/confirmar/confirmar.component';
import { StorageAppService } from '../../services/storage-app.service';
import { Router } from '@angular/router';
import { CommentService } from '../../services/localApi/comment.service';
import { Comment } from '../../model/comment';
import { UserService } from '../../services/localApi/user.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  constructor( private postService: PostService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private storageAppService: StorageAppService,
    private commentService: CommentService,
    private userService: UserService) {
      this.token = this.storageAppService.obtenerValor('token');
    }
  @Input() post: Post;
  @Input() erasable: boolean;
  @Output() deletePost = new EventEmitter();
  showComments = false;
  rootPath = 'http://localhost:8080/file/post-img/';
  commentList = [];
  // temporal
  commentPage = 0;
  commentPageSize = 5;
  token = '';

  commentTextBoxContent = '';
  user: User;
  rootPathProfleImg = 'http://localhost:8080/file/profile-img/';
  imgURL = '';
   // infity scroll
   throttle = 300;
   scrollDistance = 1;
   scrollUpDistance = 2;
   scrollCount = 0;
   pageSelected = 1;
  ngOnInit() {
    this.userService.getUserById(this.post.idUser).subscribe(result => {
      this.user = result;
      if (result.urlImg !== undefined && result.urlImg !== null) {
        this.imgURL = this.rootPathProfleImg + result.urlImg;
      }
    });
  }
  eliminarEvento(idPost: number) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: 'eliminarPost'
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.postService.deleteByPostId(idPost).subscribe(result => {
          const idPostSeleted  = this.storageAppService.obtenerValor('idPostSeleccionado');
          if (idPostSeleted !== null && idPostSeleted !== undefined) {
            if (idPostSeleted === idPost) {
                this.storageAppService.eliminarValor('idPostSeleccionado');
            }
          }
          // this.postList.filter(p => p.idPost !== idPost);
          this.deletePost.next();
          this.snackBar.open(
            'Se a eliminado el post exitosamente',
            'aceptar',
            {
              duration: 2000
            }
          );
        });
      }
    });
  }

  editarPost(post: Post) {
    // TO DO lanzar a vista de editar post.
    this.storageAppService.guardarValor('idPostSeleccionado' , post.idPost );
    this.router.navigate(['/postForm']);

  }

  showCommentsEvent() {
    this.showComments  = !this.showComments;
    if (this.showComments ===  true) {
      this.commentService.getCommentsByPostId(this.post.idPost, this.commentPage, this.commentPageSize).subscribe(result => {
        this.commentList  = result.commentList;
      });
    }
  }

  addComment() {
    const comment = new Comment;
    comment.idPost = this.post.idPost;
    comment.contentText = this.commentTextBoxContent;
    this.commentTextBoxContent = '';
    this.commentService.saveComment(comment).subscribe(result => {
        this.commentList.push(result);
    });
  }
  onScrollDown () {
    this.scrollCount++;
    console.log('scroll comment box');
    // if (this.scrollCount >= 2 ) {
    //   this.scrollCount = 0;
    //   console.log('add value to list');
    //   this.pageSelected++;
    //   this.postService.getPostByUserLogin(this.pageSelected - 1 , this.pageSize).subscribe(result => {
    //     result.listPost.map(p => {
    //       this.postList.push(p);
    //     });
    //   });
    // }

  }
  onUp(ev) {
  }

}
