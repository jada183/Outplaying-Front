import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/localApi/post.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmarComponent } from '../dialogs/confirmar/confirmar.component';
@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {
  constructor(
    private postService: PostService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  // tslint:disable-next-line:max-line-length
  postList: Post[];
  ngOnInit() {
    this.postService.getPostByUserLogin().subscribe(result => {
      this.postList = result;
      console.log(this.postList);
    });
  }

  eliminarEvento(idPost: number) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: 'eliminarPost'
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.postService.deleteByPostId(idPost).subscribe(result => {
          console.log(result);
          // this.postList.filter(p => p.idPost !== idPost);
          this.ngOnInit();
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
}
