import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfoAccountLolComponent } from './info-account-lol.component';

const routes: Routes = [
  {
    path: '',
    component:  InfoAccountLolComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InfoAccountLolRoutingModule { }

