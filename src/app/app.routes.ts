import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { InfoAccountLolComponent } from './info-account-lol/info-account-lol.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { MyPostComponent } from './my-post/my-post.component';
import { PostFormComponent } from './post-form/post-form.component';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'cuenta-lol', component: InfoAccountLolComponent },
  { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'misPost', component: MyPostComponent, canActivate: [AuthGuard] },
  { path: 'postForm', component: PostFormComponent, canActivate: [AuthGuard] }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
