import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/localApi/user.service';
import { StorageAppService } from '../services/storage-app.service';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConfirmarComponent } from '../dialogs/confirmar/confirmar.component';
import { MatSnackBar } from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  ErrorStateMatcher
} from '@angular/material';
import { validateConfig } from '@angular/router/src/config';
import { HttpErrorResponse, HttpResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { UploadFileService } from '../services/localApi/upload-file.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  rootPath = 'http://localhost:8080/file/profile-img/';
  imgURL = '';
  hide = true;
  hide2 = true;
  hide3 = true;
  user: User;
  // matcher = new MyErrorStateMatcher();
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    idUser: new FormControl(''),
    role: new FormControl(''),
    createAcountDate: new FormControl(''),
    urlImg: new FormControl('')
  });
  updatePasswordForm = new FormGroup(
    {
      lastPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      newPasswordConfirm: new FormControl('', Validators.required),
      idUser: new FormControl('')
    },
    { validators: this.checkPasswords }
  );
  constructor(
    private userService: UserService,
    private storage: StorageAppService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private uploadService: UploadFileService
  ) {}
  ngOnInit() {
    // ver como mostrar o setear correctamente el resultado de la response.
    this.userService
      .getUserById(this.storage.obtenerValor('idUser'))
      .subscribe(result => {
        this.profileForm.setValue(result);
        if (result.urlImg !== undefined && result.urlImg !== null) {
          this.imgURL = this.rootPath + result.urlImg;
        }
        this.updatePasswordForm
          .get('idUser')
          .setValue(this.storage.obtenerValor('idUser'));
      });
  }

  onSubmit() {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: 'actualizarUsuario'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(this.profileForm.value).subscribe(res => {
          this.profileForm.setValue(res);
        });
      }
    });
  }

  onSubmitNewPassword() {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: 'actualizarContraseña'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService
          .updatePassword(this.updatePasswordForm.value)
          .subscribe(
            res => {
              this.updatePasswordForm.reset();
              this.updatePasswordForm
                .get('idUser')
                .setValue(this.storage.obtenerValor('idUser'));
              this.snackBar.open(
                'contraseña cambiada exitosamente',
                'aceptar',
                {
                  duration: 2000
                }
              );
            },
            (error: HttpErrorResponse) => {
              // to change
              this.snackBar.open(error.error.message, 'aceptar', {
                duration: 2500
              });
            }
          );
      }
    });
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.controls.newPassword.value;
    const confirmPass = group.controls.newPasswordConfirm.value;

    return pass === confirmPass ? null : { notSame: true };
  }
  onFileChanged(imageInput: any) {
    const reader = new FileReader();
    const file: File = imageInput.files[0];
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload = ((_event) => {
      this.imgURL = reader.result;
    });
    this.uploadService.pushFileToStorage(file, 'profile-img').subscribe( event  => {
      // IMPORTANT
      if (event.type === HttpEventType.Response) {
        this.profileForm.get('urlImg').setValue(event.body);
      }
    });
  }
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(
//       control &&
//       control.parent &&
//       control.parent.invalid &&
//       control.parent.dirty
//     );

//     return invalidCtrl || invalidParent;
//   }
// }
