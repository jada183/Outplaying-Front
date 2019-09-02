import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form.component';

const routes: Routes = [
  {
    path: '',
    component:  PostFormComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostFormRoutingModule { }
