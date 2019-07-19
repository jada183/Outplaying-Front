import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/localApi/post.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {

  constructor(private postService: PostService) {
  }
  // tslint:disable-next-line:max-line-length
  postList: Post[];
  ngOnInit() {

    this.postService.getPostByUserLogin().subscribe(result => {
      this.postList = result;
      console.log(this.postList);
    });
  }

}
