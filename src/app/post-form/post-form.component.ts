import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Post } from '../model/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadFileService } from '../services/localApi/upload-file.service';

export class ImageSnippet {
  pending: boolean;
  status: string;
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {
  selectedFile = new ImageSnippet(undefined, undefined);
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
  constructor(private sharedService: SharedService, private uploadService: UploadFileService) {

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

    this.uploadService.pushFileToStorage(this.selectedFile.file).subscribe( event => {
    });
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';

  }
  onFileChanged(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.uploadService.pushFileToStorage(this.selectedFile.file).subscribe( rsult => {
        this.selectedFile.pending = true;
      });
      });

    reader.readAsDataURL(file);
  }
}

