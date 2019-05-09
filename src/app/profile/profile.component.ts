import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/localApi/user.service';
import { StorageAppService } from '../services/storage-app.service';

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

  constructor(
    private userService: UserService,
    private storage: StorageAppService
  ) {}
  ngOnInit() {
    // ver como mostrar o setear correctamente el resultado de la response.
    this.userService.getUserById(this.storage.obtenerValor('idUser')).subscribe( result => {
      this.user = result;
      console.log('result request: ' + result.name);
      console.log('user: ' + this.user.name);
    });
  }

  saveData() {
    console.log('Action save data');
  }
}
