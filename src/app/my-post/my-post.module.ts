import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPostComponent } from './my-post.component';
@NgModule({
  imports: [CommonModule],
  declarations: [MyPostComponent],
  exports: [MyPostComponent]
})
export class MyPostModule {}
