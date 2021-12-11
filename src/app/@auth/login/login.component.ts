import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { DataService } from 'src/app/@core/@services/data.service1';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CustomAuthService } from '../auth-module.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  subscriptions: Subscription[] = [];
  login_error: boolean;
  user: any;
  saveLoading: boolean;
  passwordInputType='password'
  constructor(
    private fb: FormBuilder,
     private cs: CommonService,
    private apiService: CustomApiService,
    private toastService: CustomToastService,
    private customAuthService: CustomAuthService,
    private update: DataUpdateService,
    private activeModal: NgbActiveModal,
    private router: Router,
    public modalService: NgbModal,
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    this.createForms();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  createForms() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }

  // //  login form return method
  get f() {
    return this.loginForm.controls;
  }

  navigate(url:any) {
    this.activeModal.dismiss();
    this.cs.navigate(url);
  }

  loginUser() {
    this.saveLoading = true;
    let request:any;
      this.apiService.setCookie('auth', '1');
      if (this.loginForm.invalid) {
        this.login_error = true;
        this.saveLoading = false;
        return;
      } else {
        this.login_error = false;
      }

      request = this.loginForm.value;
      request = {
        ...request,
      };
    const loginSub = this.customAuthService.login(request).subscribe(
      (res: any) => {
        console.log(res);
        let accesstoken = res.data[0].access_token;
        this.cs.setCookie('bearer', accesstoken);
        localStorage.setItem('bearer', accesstoken);
        this.user = res.user;
        this.cs.setStrCookie('user', this.user);
        localStorage.setItem('user',JSON.stringify(this.user))
        this.toastService.showSuccess(res.message, 'Logged In');
        this.saveLoading = false;
        this.update.changeLoggedIn(1);
        this.dataService.changeLogin(1);
        this.loginForm.reset();
        this.modalService.dismissAll();
        this.activeModal.close();
        this.router.navigate(['/profile']);
      },
      (err: any) => {
        console.log(err);
        this.toastService.showError(err.error.error_description, 'Error');
        this.saveLoading = false;
      }
    );
    this.subscriptions.push(loginSub);
  }

}
