import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { APP_ROUTING } from './app.routes';

import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared-module/shared.module';
import { NewsModule } from './news/news.module';
import { HomeModule } from './home/home.module';
import { InfoAccountLolModule } from './info-account-lol/info-account-lol.module';
import { JwtModule } from '@auth0/angular-jwt';
import { ProfileModule } from './profile/profile.module';
import { MyPostModule } from './my-post/my-post.module';
import { PostFormModule } from './post-form/post-form.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmarComponent } from './dialogs/confirmar/confirmar.component';
registerLocaleData(localeEs, 'es');
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [AppComponent, ConfirmarComponent],
  imports: [
    BrowserModule,
    // APP_ROUTING,
    BrowserAnimationsModule,
    HeaderModule,
    SharedModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmarComponent ]
})
export class AppModule {}
