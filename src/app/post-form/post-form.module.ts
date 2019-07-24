import { NgModule } from '@angular/core';
import { PostFormComponent } from './post-form.component';
import { SharedModule } from '../shared-module/shared.module';
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PostFormComponent],
  exports: [PostFormComponent]
})
export class PostFormModule { }
