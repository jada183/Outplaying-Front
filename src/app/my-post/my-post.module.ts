import { NgModule } from '@angular/core';
import { MyPostComponent } from './my-post.component';
import { SharedModule } from '../shared-module/shared.module';
@NgModule({
  imports: [ SharedModule ],
  declarations: [MyPostComponent],
  exports: [MyPostComponent]
})
export class MyPostModule {}
