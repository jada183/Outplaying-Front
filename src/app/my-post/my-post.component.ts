import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {

  constructor() { }
  postList: Post[];
  ngOnInit() {
  }

}
