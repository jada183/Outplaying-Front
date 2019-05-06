import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';

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

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    HeaderModule,
    NewsModule,
    HomeModule,
    InfoAccountLolModule,
    ProfileModule,
    SharedModule,
    MyPostModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
