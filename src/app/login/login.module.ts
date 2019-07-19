import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared-module/shared.module';
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  entryComponents: [ ]
})
export class LoginModule {}
