import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataUpdateService {
  updateDetails = new Subject<boolean>();

  public modalPopupSubject = new BehaviorSubject<string>('');
  ModalPopupSubjectObservable = this.modalPopupSubject.asObservable();

  public updateChange = new BehaviorSubject<boolean>(false);
  updateChangeObservable = this.updateChange.asObservable();

  public changeLogin = new BehaviorSubject<boolean>(false);
  changeLoginObservable = this.changeLogin.asObservable();

  public openLogin = new BehaviorSubject<boolean>(false);
  loginRequestObservable = this.openLogin.asObservable();

  public openSignup = new BehaviorSubject<boolean>(false);
  signupRequestObservable = this.openSignup.asObservable();

// header navigations
about = new Subject<any>();
audit = new Subject<any>();
contact = new Subject<any>();
presale = new Subject<any>();






  constructor() { }

  changeModalPopup(value:any): void {
    this.modalPopupSubject.next(value);
  }

  changeValue(value:any): void {
    this.updateChange.next(value);
  }

  changeLoggedIn(value:any): void {
    this.changeLogin.next(value);
  }

  openLoginRequest(value:any): void {
    this.openLogin.next(value);
  }

  openSignRequest(value:any): void {
    this.openSignup.next(value);
  }


}

