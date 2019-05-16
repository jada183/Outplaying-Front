import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/localApi/user.service';
import { StorageAppService } from '../services/storage-app.service';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConfirmarComponent } from '../dialogs/confirmar/confirmar.component';
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
  updatePasswordForm = new FormGroup ( {
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    newPasswordConfirm: new FormControl('', Validators.required)
  }, {validators: this.checkPasswords});
  constructor(
    private userService: UserService,
    private storage: StorageAppService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    // ver como mostrar o setear correctamente el resultado de la response.
    this.userService.getUserById(this.storage.obtenerValor('idUser')).subscribe( result => {
      this.profileForm.setValue(result);
    });
  }

  onSubmit() {

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: 'actualizarUsuario'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(this.profileForm.value).subscribe( res => {
          this.profileForm.setValue(res);
        });
      }
    });
  }

  onSubmitNewPassword() {
    console.log('on submit new password');
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const pass = group.controls.newPassword.value;
  const confirmPass = group.controls.newPasswordConfirm.value;

  return pass === confirmPass ? null :  { notSame: true };
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
