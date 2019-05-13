import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/localApi/user.service';
import { StorageAppService } from '../services/storage-app.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = {
    idUser: 0,
    name: undefined,
    surname: undefined,
    email: undefined,
    role: undefined,
    createAccountDate: undefined
  };
  profileForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    idUser: new FormControl(''),
    role: new FormControl(''),
    createAcountDate: new FormControl('')
  });
  constructor(
    private userService: UserService,
    private storage: StorageAppService
  ) {}
  ngOnInit() {
    // ver como mostrar o setear correctamente el resultado de la response.
    this.userService.getUserById(this.storage.obtenerValor('idUser')).subscribe( result => {
      this.profileForm.setValue(result);
    });
  }

  onSubmit() {
    // to do
    // metodo para guardar cambios en los datos del usuario
    console.log('hola mundo!');
  }
}
