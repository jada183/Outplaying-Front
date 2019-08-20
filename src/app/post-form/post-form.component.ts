import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Post } from '../model/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadFileService } from '../services/localApi/upload-file.service';
import { HttpEventType } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmarComponent } from '../dialogs/confirmar/confirmar.component';
import { PostService } from '../services/localApi/post.service';
import { StorageAppService } from '../services/storage-app.service';

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
    date: new FormControl(''),
    likes: new FormControl(''),
    postName: new FormControl('', Validators.required),
    contentText: new FormControl('', Validators.required),
    picturesURL: new FormControl(''),
    idUser: new FormControl(''),
    idUserManager: new FormControl(''),
    manageDate: new FormControl(''),
    status: new FormControl('')
  });
  constructor(
    private sharedService: SharedService,
    private uploadService: UploadFileService,
    public dialog: MatDialog,
    private postService: PostService,
    private storage: StorageAppService,
    private snackBar: MatSnackBar
  ) {}
  post: Post = new Post(
    null,
    null,
    null,
    null,
    new Date(),
    null,
    null,
    null,
    this.storage.obtenerValor('idUser'),
    null
  );
  imgURL = '';
  rootPath = 'http://localhost:8080/file/post-img/';
  ngOnInit() {
    // if (this.sharedService.selectedPost !== undefined) {
    //   this.post = this.sharedService.selectedPost;
    //   if (
    //     this.post.picturesURL !== undefined &&
    //     this.post.picturesURL !== null &&
    //     this.post.picturesURL !== ''
    //   ) {
    //     this.imgURL = this.rootPath + this.post.picturesURL;
    //   }
    // }
    // this.postForm.setValue(this.post);
    const idPostSeleted  = this.storage.obtenerValor('idPostSeleccionado');
    if (idPostSeleted !== null && idPostSeleted !== undefined) {
      this.postService.getPostById(idPostSeleted).subscribe(result => {
        this.post = result;
        if (
              this.post.picturesURL !== undefined &&
              this.post.picturesURL !== null &&
              this.post.picturesURL !== ''
            ) {
              this.imgURL = this.rootPath + this.post.picturesURL;
            }
        this.postForm.setValue(this.post);
      });
    }
  }
  onSubmit() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
    if (this.postForm.get('idPost').value !== null) {
      const dialogRef = this.dialog.open(ConfirmarComponent, {
        data: 'actualizarPost'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.postService.updatePost(this.postForm.value).subscribe(res => {
            this.postForm.setValue(res);
            this.snackBar.open('Post actualizado correctamente ', 'Aceptar', {
              duration: 2000
            });
          });
        }
      });
    } else {
      this.postForm.get('idUser').setValue(this.storage.obtenerValor('idUser'));
      this.postService.createPost(this.postForm.value).subscribe(res => {
        this.postForm.setValue(res);
        this.snackBar.open('Post guardado correctamente ', 'Aceptar', {
          duration: 2000
        });
      });
    }
  }
  onFileChanged(imageInput: any) {
    const reader = new FileReader();
    const file: File = imageInput.files[0];
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
    // TO CHANGE
    this.uploadService.pushFileToStorage(file, 'post-img').subscribe(event => {
      if (event.type === HttpEventType.Response) {
        this.postForm.get('picturesURL').setValue(event.body);
      }
    });
  }
}
