import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  updateDetails = new Subject<boolean>();

  public loginSubject = new BehaviorSubject<boolean>(false);
  loginSubjectObservable = this.loginSubject.asObservable();

  public forbiddenSubject = new BehaviorSubject<boolean>(false);
  forbiddenSubjectObservable = this.forbiddenSubject.asObservable();

  public updateProfileData = new BehaviorSubject<boolean>(false);
  updateProfileDataObservable = this.updateProfileData.asObservable();

  constructor() { }

  changeLogin(value:any): void {
    this.loginSubject.next(value);
  }
  changeForbidden(value:any): void {
    this.forbiddenSubject.next(value);
  }
  changeProfileData(value:any): void {
    this.updateProfileData.next(value);
  }
}
