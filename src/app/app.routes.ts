import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { InfoAccountLolComponent } from './info-account-lol/info-account-lol.component';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'cuenta-lol', component: InfoAccountLolComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
