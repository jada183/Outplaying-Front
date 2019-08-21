import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../model/post';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PostService } from '../../services/localApi/post.service';
import { ConfirmarComponent } from '../../dialogs/confirmar/confirmar.component';
import { StorageAppService } from '../../services/storage-app.service';
import { Router } from '@angular/router';
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
    private storageAppService: StorageAppService) { }
  @Input() post: Post;
  @Output() deletePost = new EventEmitter();
  rootPath = 'http://localhost:8080/file/post-img/';
  ngOnInit() {
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
}
