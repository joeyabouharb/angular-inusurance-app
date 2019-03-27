import { ClaimListComponent } from './claims/claim-list/claim-list.component';
import { ClaimDetailsComponent } from './claims/claim-details/claim-details.component';
import { ClaimFormComponent } from './claims/claim-form/claim-form.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';



export const secureRoutes: Routes = [
  {
    path: 'claim',
     component: HeaderComponent,
      canActivate: [AuthGuardService],
      children: [
        {
          path: '', redirectTo: 'list', pathMatch: 'full',
        },
        {
          path: 'list', component: ClaimListComponent,
        },
        {
          path: 'details/:id', component: ClaimDetailsComponent
        },
        {
          path: 'add', component: ClaimFormComponent
        },
        {
         path: 'send-mail', component: SendEmailComponent
        },
      ],
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(secureRoutes)]
})
export class SecureRoutingModule { }

