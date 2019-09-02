import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared-module/shared.module';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  entryComponents: [ ]
})
export class LoginModule {}
