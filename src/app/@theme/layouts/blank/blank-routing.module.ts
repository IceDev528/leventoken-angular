import { ResetPasswordModule } from './../../../@auth/reset-password/reset-password.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SignupComponent } from 'src/app/@auth/signup/signup.component';
// import { LoginComponent } from 'src/app/@auth/login/login.component';
// import { ForgotPasswordComponent } from 'src/app/@auth/forgot-password/forgot-password.component';
// import { OtpComponent } from 'src/app/@view/otp/otp.component';
// import { ChangePasswordComponent } from 'src/app/@auth/change-password/change-password.component';

const routes: Routes = [
  {
    path: "",
   loadChildren:()=> import('../../../@auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'enterotp',
    loadChildren: () =>
        import('../../../@view/otp/otp.module').then(
          (m) => m.OtpModule
        ),
  },

  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import(
  //       '../../../@shared/@components/miscellaneous/miscellaneous.module'
  //     ).then((m) => m.MiscellaneousModule),
  // },
  {
    path: '**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankRoutingModule { }
