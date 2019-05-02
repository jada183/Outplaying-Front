import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { StorageAppService } from '../services/storage-app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private storageAppService: StorageAppService,
    private router: Router
  ) {}
  @Input() logIn;
  ngOnInit() {}
  logOut() {
    this.storageAppService.eliminarValor('token');
    this.router.navigate(['/login']);
    this.sharedService.emitChange('false');
  }
}
