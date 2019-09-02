import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'noticias',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'perfil',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cuenta-lol',
    loadChildren: './info-account-lol/info-account-lol.module#InfoAccountLolModule'
  },
  {
    path: 'misPost',
    loadChildren: './my-post/my-post.module#MyPostModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'postForm',
    loadChildren: './post-form/post-form.module#PostFormModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
