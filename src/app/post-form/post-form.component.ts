import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Post } from '../model/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm = new FormGroup({
    idPost: new FormControl(''),
    date:  new FormControl(''),
    likes: new FormControl(''),
    postName: new FormControl('', Validators.required),
    contentText: new FormControl('', Validators.required),
    picturesURL: new FormControl('', Validators.email),
    idUser: new FormControl(''),
    idUserManager: new FormControl(''),
    manageDate: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(private sharedService: SharedService) {

  }
  post: Post = new Post;
  ngOnInit() {
    if (this.sharedService.selectedPost !== undefined) {
      this.post = this.sharedService.selectedPost;
    } else {
      this.post = new Post;
    }
    console.log(this.post);
    this.postForm.setValue(this.post);


  }
  guardar() {
    console.log('hola mundo');
  }

}
