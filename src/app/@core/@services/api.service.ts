import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { AuthService } from 'angularx-social-login';
// import { CookieService } from 'ngx-cookie';
import { observable, Observable } from 'rxjs';
import { catchError, filter, map, timeout } from 'rxjs/operators';
// import { CommonService } from 'src/app/@core/@services/common.service';
import { BASE_URL, IMAGE_URL, UPLOAD_IMAGE_URL } from 'src/app/@core/@utills/constant';
import { API_TYPE } from '../@utills/api-type';
// import { DataUpdateService } from './data.service';
import { CustomToastService } from './toast.service';
import { CookieService } from 'ngx-cookie-service';
import { DataUpdateService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CustomApiService {
  public serverURL = BASE_URL;
  noWhitespaceValidator: ValidatorFn;
  constructor(
    private http: HttpClient,
    private toastService: CustomToastService,
    private dataService: DataUpdateService,
    private cookie: CookieService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) { }

  // getHeader() {
  //   const session = JSON.parse(localStorage.getItem('session'));
  //   const headers = new HttpHeaders()
  //     .set('Authorization', session ? session.token : '')
  //     .set('Content-Type', 'application/json');
  //   console.log(headers);

  //   return headers;
  // }

  getHeader() {
    // let token = this.cookie.get('bearer') || '';
    let token = localStorage.getItem('bearer') || ''
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: token,
      token: token,

    });
    return headers;
  }

  getUrl(url:any, isFake?: any) {
    if (isFake) {
      return 'https://app-transfer.com:3006/' + url;
    }
    return this.serverURL + url;
  }

  checkProfileCompleted() {
    const session = JSON.parse(localStorage.getItem('session') as any);
    const is_profile_completed = session.user.is_profile_completed;
    if (is_profile_completed) {
      return true;
    } else {
      return false;
    }
  }

  checkStripeConnected() {
    const session = JSON.parse(localStorage.getItem('session') as any);
    const is_stripe_connected = session.user.is_stripe_connected;
    if (is_stripe_connected) {
      return true;
    } else {
      return false;
    }
  }

  httpRequest(requestConfig:any, data:any): Observable<any> {
    if (requestConfig.method == API_TYPE.GET) {
      return this.http.get(
        this.getUrl(requestConfig.endpoint, requestConfig.isFake),
        {
          headers: this.getHeader(),
          params: data,
        }
      );
    } else if (requestConfig.method == API_TYPE.POST) {
      return this.http.post(
        this.getUrl(requestConfig.endpoint, requestConfig.isFake),
        data,
        {
          headers: this.getHeader(),
        }
      );
    } else if (requestConfig.method == API_TYPE.PUT) {
      return this.http.put(
        this.getUrl(requestConfig.endpoint, requestConfig.isFake),
        data,
        {
          headers: this.getHeader(),
        }
      );
    } else if (requestConfig.method == API_TYPE.DELETE) {
      const data1 = {
        body: data,
        headers: this.getHeader(),
      };
      return this.http.delete(
        this.getUrl(requestConfig.endpoint, requestConfig.isFake),
        data1
      );
    }
    else{
      let a :any;
      return a
    }
  }
  uploadMedia(request:FormData) {
    // const request = new FormData();
    // request.append('file', data);

    return this.http.post(UPLOAD_IMAGE_URL,request,{headers: new HttpHeaders().set('skipHeader', 'true'),});
  }
  unauthorized() {
    this.toastService.showError('Please login to Continue.', 'Unauthorized');
    localStorage.clear();
    this.router.navigate(['']);
  }

  isAutherize(): boolean {
    if (localStorage.getItem('session')) {
      HttpClient;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    return new Promise((resolve, error) => {
      let auth: any = this.getCookie('auth');
      if (auth == 0) {
      }
      localStorage.clear();
      this.delAllCookie().then((res) => {
        this.toastService.showSuccess(
          'User Logged out Successfully',
          'Logged Out'
        );
      });
      this.dataService.changeLoggedIn(true);
      this.router.navigate(['']);
      resolve(true);
    });
  }

  get checkCookie() {
    let cookie = this.cookie.getAll();
    return cookie;
  }
  i = 0;
  delAllCookie() {
    return new Promise((res, err) => {
      let cookies = this.cookie.getAll();
      this.i++;
      for (const key in cookies) {
        if (cookies.hasOwnProperty(key)) {
          this.delCookie(key);
        }
      }
      this.cookie.deleteAll();
      if (Object.keys(this.checkCookie).length == 0) {
        res(true);
      } else {
        if (this.i <= 100) {
          this.delAllCookie();
        } else {
          err(true);
        }
      }
    });
  }
  delCookie(name:any) {
    return this.cookie.delete(name);
  }
  uploadMedia1(data:any) {
    // let request: any = data;
    let request = new FormData();
    request.append("file", data);

    return this.http.post("https://app-transfer.com:3006/api/upload/local", request, {
      headers: new HttpHeaders().set("skipHeader", "true"),
      reportProgress: true,
      observe: "events"
    }).pipe(
      // if responce takes more than one minute
      timeout(60000),
      // ...errors if any
      // catchError(this.handleError),
      // ...and calling .json() on the response to return data
      map((res: any) => {
        return res;
      })
    );
  }

  setCookie(name: string, value: string) {
    this.cookie.set(name, value,);
  }

  setStrCookie(name: string, value:any) {
    value = JSON.stringify(value);
    this.cookie.set(name, value,);
  }

  getCookie(name: string) {
    return this.cookie.get(name);
  }

  getJSONCookie(name: string) {
    const val = this.cookie.get(name);
    return JSON.parse(val);
  }

  deleteAllCookies() {
    this.cookie.deleteAll();
  }
  setTitle() {
    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     map(() => {
    //       let child = this.activatedRoute;
    //       while (child) {
    //         if (child.firstChild) {
    //           child = child.firstChild;
    //         } else if (child.snapshot.data && child.snapshot.data.title) {
    //           return child.snapshot.data.title;
    //         } else {
    //           return null;
    //         }
    //       }
    //       return null;
    //     })
    //   )
    //   .subscribe((data: any) => {
    //     if (data) {
    //       this.setTitleValue(data);
    //     }
    //   });
  }

  setTitleValue(val: string) {
    this.titleService.setTitle('Potswork : ' + val);
  }
}
