import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { SignUpModule } from './signup/signup.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CustomAuthService } from './auth-module.service';
import { CustomApiService } from '../@core/@services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


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
  providers: [

  ],
})
export class AuthModule { }
