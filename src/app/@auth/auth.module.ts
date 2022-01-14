import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { AuthRoutingModule } from './auth-routing.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { LoginModule } from './login/login.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { SignUpModule } from './signup/signup.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModule,
    ResetPasswordModule,
    SignUpModule,
    ForgotPasswordModule,
    ChangePasswordModule,

  ],
})
export class AuthModule { }
