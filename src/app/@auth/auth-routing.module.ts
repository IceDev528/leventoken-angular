import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    // {
    //   path:'login',
    //   loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)
    // }
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'forgotpass',
      component:ForgotPasswordComponent
    },
    // {
    //   path:'newpass',
    //   component:ChangePasswordComponent
    // },
    {
      path:'newpass/:token',
      // component:ChangePasswordComponent,
      loadChildren: () =>
          import('../@auth/reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
