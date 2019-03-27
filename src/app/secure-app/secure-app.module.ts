import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureRoutingModule, secureRoutes } from './secure-route.module';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { ClaimDetailsComponent } from './claims/claim-details/claim-details.component';
import { ClaimFormComponent, EnumToArrayPipe } from './claims/claim-form/claim-form.component';
import { ClaimListComponent } from './claims/claim-list/claim-list.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '../shared/services/auth-interceptor.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClaimDetailsComponent,
    ClaimFormComponent,
    ClaimListComponent,
    SendEmailComponent,
    EnumToArrayPipe
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(secureRoutes),
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    AuthGuardService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
})
export class SecureAppModule { }
