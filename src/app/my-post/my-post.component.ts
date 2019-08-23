import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/localApi/post.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmarComponent } from '../dialogs/confirmar/confirmar.component';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { StorageAppService } from '../services/storage-app.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {
  constructor(
    private postService: PostService
  ) {}
  postList: Post[] = [];
  pageSize = 2;
  pageNumber = 0;
  pages =  [];
  pageSelected = 1;
  ngOnInit() {
    this.pages =  [];
    this.postService.getPostByUserLogin(this.pageSelected - 1 , this.pageSize).subscribe(result => {
      console.log(result);
      this.postList = result.listPost;
      this.pageNumber = result.numberOfPages;
      for ( let i = 1; i <= this.pageNumber;  i ++) {
        this.pages.push(i);
      }
    });
  }
  pageChange(n: number) {
    this.pageSelected = n;
    this.postService.getPostByUserLogin(n - 1, this.pageSize).subscribe(result => {
      console.log(result);
      this.postList = result.listPost;
    });
  }
  eliminarEvento() {
    // el container de post emite un evento al eliminar un post para refrescar la pantalla.
    this.ngOnInit();
  }
}
