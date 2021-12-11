
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CHANGE_PASSWORD_PUT, PERSONAL_INFO_PROFILE_PUT, PROFILE_GET } from 'src/app/@core/@utills/api-constant';
// import { AuthResponse } from 'src/app/@shared/@models/user.model';
// import { User } from '../../@shared/@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private apiService: CustomApiService) { }

  // editProfile(request:any) {
  //   return this.apiService.httpRequest(PROFILE_PUT, request);
  // }
  getProfile(request:any) {
    return this.apiService.httpRequest(PROFILE_GET, request);
  }
  // getcontent(request:any) {
  //   return this.apiService.httpRequest(CONTENT_GET, request);
  // }
  // resendEmailVerification(request:any) {
  //   return this.apiService.httpRequest(RESEND_VERIFY_EMAIL, request);
  // }

  // deleteAccount(request:any) {
  //   return this.apiService.httpRequest(PROFILE_DEACTIVATE, request);
  // }
  uploadPic(request:any) {
    return this.apiService.uploadMedia(request);
    // return this.apiService.httpRequest(UPLOAD_IMAGE,request);
  }
  setPersonalInfo(request:any) {
    return this.apiService.httpRequest(PERSONAL_INFO_PROFILE_PUT, request);
  }
  changePassword(request:any){
    return this.apiService.httpRequest(CHANGE_PASSWORD_PUT, request);

  }
}
