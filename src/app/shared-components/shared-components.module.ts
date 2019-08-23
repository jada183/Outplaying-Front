import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './post-container/post-container.component';
import { SharedModule } from '../shared-module/shared.module';
import { CommentContainerComponent } from './comment-container/comment-container.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ PostContainerComponent, CommentContainerComponent ],
  exports: [ PostContainerComponent ]
})
export class SharedComponentsModule { }
