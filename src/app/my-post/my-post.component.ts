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

  // infity scroll
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  scrollCount = 0;
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

      this.postList = result.listPost;
    });
  }
  eliminarEvento() {
    // el container de post emite un evento al eliminar un post para refrescar la pantalla.
    this.ngOnInit();
  }
  onScrollDown () {
    this.scrollCount++;
    // if (this.scrollCount > 10 ) {
      this.scrollCount = 0;
      console.log('add value to list');
      this.pageSelected++;
      this.postService.getPostByUserLogin(this.pageSelected - 1 , this.pageSize).subscribe(result => {
        result.listPost.map(p => {
          this.postList.push(p);
        });
      });
    // }

  }
  onUp(ev) {
    console.log('scrolled up!', ev);
  }
}
