import { NgModule } from '@angular/core';
import { PostFormComponent } from './post-form.component';
import { SharedModule } from '../shared-module/shared.module';
import { PostFormRoutingModule } from './post-form-routing.module';
@NgModule({
  imports: [
    SharedModule,
    PostFormRoutingModule
  ],
  declarations: [PostFormComponent],
  exports: [PostFormComponent]
})
export class PostFormModule { }
