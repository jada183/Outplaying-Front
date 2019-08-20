import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { StorageAppService } from '../services/storage-app.service';
import { Router } from '@angular/router';
import { UserService } from '../services/localApi/user.service';
import { Post } from '../model/post';
import { MatMenuTrigger } from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private storageAppService: StorageAppService,
    private router: Router,
    private userService: UserService
  ) {
    router.events.subscribe( e => {
      const currentUrlSpliting = window.location.href.split('/');
      this.currentURL = currentUrlSpliting[currentUrlSpliting.length - 1];
    });
  }
  @Input() logIn;
  currentURL: string;
  // declaro el trigger para cerrar el menu cuando se hace scroll
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  scroll = (): void => { this.trigger.closeMenu(); };
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, false);
    const currentUrlSpliting = window.location.href.split('/');
    this.currentURL = currentUrlSpliting[currentUrlSpliting.length - 1];
  }

  logOut() {
    this.storageAppService.eliminarValor('token');
    this.storageAppService.eliminarValor('idUser');
    // this.currentURL = 'noticias';
    this.router.navigate(['/noticias']);
    this.sharedService.emitChange('false');
  }
  newPost() {
    this.storageAppService.eliminarValor('idPostSeleccionado');
  }
}
