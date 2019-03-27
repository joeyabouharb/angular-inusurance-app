import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './views/user/user-login/user-login.component';
import { SignupComponent } from './views/user/signup/signup.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/claim', pathMatch: 'full',
  },
  {
    path: 'user/signup', component: SignupComponent,
  },
  {
    path: 'user/login', component: UserLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
