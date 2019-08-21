import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { SharedModule } from '../shared-module/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ PostContainerComponent ],
  exports: [ PostContainerComponent ]
})
export class SharedComponentsModule { }
