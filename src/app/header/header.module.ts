import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared-module/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { APP_ROUTING } from '../app.routes';
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    AppRoutingModule
    // APP_ROUTING
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
