import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
    path:'reset',
    component: PasswordResetComponent
  },
  {
    path:'password-change',
    component: PasswordChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
