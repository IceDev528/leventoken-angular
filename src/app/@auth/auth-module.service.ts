import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomApiService } from '../@core/@services/api.service';
import {
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  LOGIN,
  SIGNUP,
} from '../@core/@utills/api-constant';
import { AuthResponse } from '../@shared/@models/user.model';
// import { NotificationRequest } from '../@view/account/notification-setting/notification-setting.model';
// import { PersonalInfoRequest } from '../@view/account/personal-info/personal-info.model';
// import { ContactUsRequest } from '../@view/contact-us/contact-us.model';
// import { VerifyEmailRequest } from '../@view/home/home.model';
import { ChangePasswordRequest } from './change-password/change-password.model';
import { ForgetPasswordRequest } from './forgot-password/forgot-password.model';
import { LoginRequest } from './login/login.model';
import { ResetPasswordRequest } from './reset-password/reset-password.model';
import { SignupRequest, VerifyPhoneRequest } from './signup/signup.model';

@Injectable({
  providedIn: 'root',
})
export class CustomAuthService {
  constructor(private apiService: CustomApiService) { }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.apiService
      .httpRequest(LOGIN, request)
      .pipe(map((res) => new AuthResponse(res)));
  }

  signUp(request: SignupRequest): Observable<AuthResponse> {
    return this.apiService
      .httpRequest(SIGNUP, request)
      .pipe(map((res) => new AuthResponse(res)));
  }
  // verifyPhone(request: VerifyPhoneRequest): Observable<AuthResponse> {
  //   return this.apiService
  //     .httpRequest(VERIFY_PHONE, request)
  //     .pipe(map((res) => new AuthResponse(res)));
  // }

  // verifyEmail(request: VerifyEmailRequest): Observable<AuthResponse> {
  //   return this.apiService
  //     .httpRequest(VERIFY_EMAIL, request)
  //     .pipe(map((res) => new AuthResponse(res)));
  // }

  // resendVerifyPhone(request:any): Observable<AuthResponse> {
  //   return this.apiService
  //     .httpRequest(RESEND_VERIFY_PHONE, request)
  //     .pipe(map((res) => new AuthResponse(res)));
  // }

  forgetPassword(request: ForgetPasswordRequest) {
    return this.apiService.httpRequest(FORGOT_PASSWORD, request);
  }

  // changePassword(request: ChangePasswordRequest) {
  //   return this.apiService.httpRequest(CHANGE_PASSWORD, request);
  // }
    resetPassword(request: ResetPasswordRequest) {
    return this.apiService.httpRequest(CHANGE_PASSWORD, request);
  }

  // saveNotification(request: NotificationRequest) {
  //   return this.apiService.httpRequest(RESET_NOTIFICATION, request);
  // }



  // contactUs(request: ContactUsRequest) {
  //   return this.apiService.httpRequest(CONTACTUS, request);
  // }

  // profile(request: PersonalInfoRequest) {
  //   return this.apiService.httpRequest(PROFILE, request);
  // }

  signOut() {
    return new Promise((resolve, err) => {
      setTimeout(() => {
        resolve(true);
      }, 200);
    });
  }
}
