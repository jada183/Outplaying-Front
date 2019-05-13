import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/localApi/user.service';
import { StorageAppService } from '../services/storage-app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
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
  }
}
