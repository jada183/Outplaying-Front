import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared-module/shared.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
@NgModule({
  imports: [SharedModule, SharedComponentsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
