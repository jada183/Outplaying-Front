import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ConfirmarComponent } from '../dialogs/confirmar/confirmar.component';
import { SharedModule } from '../shared-module/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent, ConfirmarComponent],
  exports: [ProfileComponent],
  entryComponents: [ ConfirmarComponent ]
})
export class ProfileModule {}
