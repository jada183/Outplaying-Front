import { Component, OnInit } from '@angular/core';
import { NasaDataService } from '../services/nasa-data.service';
import { Post } from '../model/post';
import { PostService } from '../services/localApi/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor( private postService: PostService) { }

  postList: Post[] = [];
  pageSize = 2;
  pageNumber = 0;
  pages =  [];
  pageSelected = 1;
  ngOnInit() {
    this.postService.getAllPaginated(this.pageSelected - 1 , this.pageSize).subscribe(result => {
      this.postList = result.listPost;
      this.pageNumber = result.numberOfPages;
      for ( let i = 1; i <= this.pageNumber;  i ++) {
        this.pages.push(i);
      }
    });
  }
  pageChange(n: number) {
    this.pageSelected = n;
    this.postService.getAllPaginated(n - 1, this.pageSize).subscribe(result => {
      this.postList = result.listPost;
    });
  }
}

