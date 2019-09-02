import { NgModule } from '@angular/core';
import { MyPostComponent } from './my-post.component';
import { SharedModule } from '../shared-module/shared.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MyPostRoutingModule } from './my-post-routing.module';
@NgModule({
  imports: [ SharedModule, SharedComponentsModule, InfiniteScrollModule, MyPostRoutingModule ],
  declarations: [MyPostComponent],
  exports: [MyPostComponent]
})
export class MyPostModule {}
