import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { StorageAppService } from '../services/storage-app.service';
import { Router } from '@angular/router';
import { UserService } from '../services/localApi/user.service';
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
  ngOnInit() {
    const currentUrlSpliting = window.location.href.split('/');
    this.currentURL = currentUrlSpliting[currentUrlSpliting.length - 1];
  }
  logOut() {
    this.storageAppService.eliminarValor('token');
    this.userService.setUserAuthenticated(null);
    // this.currentURL = 'noticias';
    this.router.navigate(['/noticias']);
    this.sharedService.emitChange('false');
  }

}
