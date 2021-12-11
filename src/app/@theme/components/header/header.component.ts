// import { HttpErrorResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Router } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, Subject } from 'rxjs';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { IMAGE_URL, MEDIA_URL } from 'src/app/@core/@utills/constant';
import { MODAL_TYPE } from 'src/app/@core/@utills/modal-contants';
import { ProfileService } from 'src/app/@view/profile/profile.service';
// import { ProfileService } from 'src/app/@view/profile/profile.service';
import { DataService } from '../../../@core/@services/data.service1';

@Component({
  selector: 'shared-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  changeHeader = 0;
  loggedIn: boolean = false;
  updated: Subject<boolean>;
  subscriptions: Subscription[] = [];
  user: any;
  mediaUrl = MEDIA_URL;
  userNameShort:any;
imgUrl=IMAGE_URL
  constructor(
    private cs: CommonService,
    private updatedata: DataUpdateService,
    public modalService: NgbModal,
    private authService: CustomAuthService,
    private apiService: CustomApiService,
    private profileService: ProfileService,
    private router: Router,
    private toastService: CustomToastService,
    private update: DataUpdateService,
    private dataService: DataService
  ) { }


  ngOnInit() {

    this.updated = this.updatedata.updateDetails;
    let token =localStorage.getItem('bearer')
    // if (this.cs.getCookie('bearer')) {
      if (token) {

      this.getUserInfo();
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    // if (this.loggedIn == false) {
    // }
    this.updatedata.updateChangeObservable.subscribe((res) => {
      if (res) {
        if (token) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        // if (this.loggedIn) {
        //   this.logOut();
        //   this.changePassword();
        //   this.resetPassword();
        //   this.userProfile();
        //   this.checkUser();
        // }
        // this.user = this.cs.getJsonCookie('user');
        // this.user =localStorage.getItem('user');
        this.getUserInfo();

        // this.checkUser();
        this.updatedata.changeValue(false);
      }
    });
  }
  ngAfterViewInit() {
    this.dataService.loginSubjectObservable.subscribe((res:any) => {
      if (res) {
        // if (this.cs.getCookie('bearer')) {
        if (localStorage.getItem('bearer')) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        // this.user = this.cs.getJsonCookie('user');
        let user = localStorage.getItem('user');
        if(user){
          this.user=JSON.parse(user)
        }

        // this.checkUser();
      }
    });
    this.dataService.updateProfileDataObservable.subscribe((res:any) => {
      if (res) {
        // this.user = this.cs.getJsonCookie('user');
        let user = localStorage.getItem('user');
        if(user){
          this.user=JSON.parse(user)
        }

      }
    });
    this.updatedata.changeLoginObservable.subscribe((res:any) => {
      if (res) {
        // if (this.cs.getCookie('bearer')) {
          if (localStorage.getItem('bearer')) {

          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        // this.user = this.cs.getJsonCookie('user');
        let user = localStorage.getItem('user');
        if(user){
          this.user=JSON.parse(user)
        }

        // this.checkUser();
      }

    });
  }

  getUserInfo() {
    const request = {};
    const userSub = this.profileService.getProfile(request).subscribe(
      (res: any) => {
    if (res) {
          this.user = res.data;
          if(!this.user.profile_pic){
            let name =res.data.name.split(' ')
            let fChar=name[0][0];
            let lChar='';
            if(name[1]){
              lChar=name[1][0]
            }
            this.userNameShort= fChar+lChar;
            this.userNameShort=  this.userNameShort.toUpperCase();
          }

          this.cs.setStrCookie('user', this.user);
          localStorage.setItem('user',JSON.stringify(this.user));
        }
      },
      (err: HttpErrorResponse) => {
        if (err.status == 403) {
          this.router.navigate(['/']);
        }
        if (err.status == 401) {
          localStorage.clear();
          this.toastService.showError(err.error.error_description, 'Error');
          this.router.navigate(['/login']);
        }
      }
    );
    this.subscriptions.push(userSub);
  }

  checkUser() {
    this.loggedIn = this.user ? true : false;
  }

  navigate(url:any) {
    this.modalService.dismissAll();
    this.cs.navigate(url);
  }

  // open(content:any) {
  //   this.modalService.dismissAll();
  //   this.modalService.open(content, {
  //     windowClass: 'headerModalClass',
  //     centered: true,
  //   });
  // }

  logOut() {
    this.apiService.logout();
    this.loggedIn = false;
  }

  about() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.update.about.next(true);
    }, 100);
  }
  audit() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.update.audit.next(true);
    }, 100);
  }
  presale() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.update.presale.next(true);
    }, 100);
  }

  contact() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.update.contact.next(true);
    }, 100);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      if (element) {
        element.unsubscribe();
      }
    });
  }
  // openLogin() {
  //   this.update.changeModalPopup(MODAL_TYPE.LOGIN);
  // }
  // openSignup() {
  //   this.update.changeModalPopup(MODAL_TYPE.SIGNUP);
  // }
  // changePassword() {
  //   this.update.changeModalPopup(MODAL_TYPE.CHANGE_PASSWORD);
  //   this.loggedIn = true;
  // }
  // resetPassword() {
  //   this.cs.navigate('/reset-password');
  //   this.loggedIn = true;
  // }
  // userProfile() {
  //   this.cs.navigate('/profile');
  //   this.loggedIn = true;
  // }
//   scroll() {
//     (document.querySelector('#about') as any).scrollIntoView({ behavior: 'smooth', block: 'center' });
//  }

//  scrollaudit() {
//   (document.querySelector('#aduit') as any).scrollIntoView({ behavior: 'smooth', block: 'center' });
// }

// scrollcontact() {
//   (document.querySelector('#contact') as any).scrollIntoView({ behavior: 'smooth', block: 'center' });
// }
}
















