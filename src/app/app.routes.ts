import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';




const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
