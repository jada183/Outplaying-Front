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
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hide = true;
  hide2 = true;
  hide3 = true;
  user: User;
  matcher = new MyErrorStateMatcher();
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    idUser: new FormControl(''),
    role: new FormControl(''),
    createAcountDate: new FormControl('')
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
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    // ver como mostrar o setear correctamente el resultado de la response.
    this.userService
      .getUserById(this.storage.obtenerValor('idUser'))
      .subscribe(result => {
        this.profileForm.setValue(result);
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
    console.log(
      'las password:' + this.updatePasswordForm.get('lastPassword').value
    );
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
            error => {
              // to change
              console.log('mensaje de error:' + error);
              this.snackBar.open('contraseña incorrecta', 'aceptar', {
                duration: 2000
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
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}
