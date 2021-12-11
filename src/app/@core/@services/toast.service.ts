import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { AuthService } from 'angularx-social-login';
// import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { BASE_URL, IMAGE_URL } from 'src/app/@core/@utills/constant';
// import { DataUpdateService } from './data.service';
import { isPlatformBrowser } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomToastService {
  public serverURL = BASE_URL + '/api/';
  noWhitespaceValidator: ValidatorFn;
  constructor(
    private toastr: ToastrService,
  ) { }

  showSuccess(msg:string, title:string) {
    this.toastr.success(msg, title, {
      timeOut: 1500,
      positionClass: 'toast-top-right',
      progressBar: true,
    });
  }

  showError(msg:string, title:string) {
    this.toastr.error(msg, title, {
      timeOut: 2000,
      positionClass: 'toast-top-right',
      progressBar: true,
    });
  }
  showWarning(msg:string, title:string) {
    this.toastr.warning(msg, title, {
      timeOut: 2000,
      positionClass: 'toast-top-right',
      progressBar: true,
    });
  }

  showWentWrong(error?: any) {
    this.toastr.error(error ? error : 'Something Went Wrong', 'Error', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
      progressBar: true,
    });
  }

}
