import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './secure-app/header/header.component';

import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { LoginBannerComponent } from './views/layouts/login-banner/login-banner.component';

import { UserLoginComponent } from './views/user/user-login/user-login.component';
import { SignupComponent } from './views/user/signup/signup.component';
import { SecureAppModule } from './secure-app/secure-app.module';
import { AuthGuardService } from './shared/services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    LoginBannerComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureAppModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
