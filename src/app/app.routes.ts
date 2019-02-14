import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'noticias', component: NewsComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
