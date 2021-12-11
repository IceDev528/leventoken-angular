import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CustomAuthService } from '../auth-module.service';
import { ForgetPasswordRequest } from './forgot-password.model';
import { MODAL_TYPE } from 'src/app/@core/@utills/modal-contants';
import { CommonService } from 'src/app/@core/@services/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  forgotFormError: boolean;
  subscriptions: Subscription[] = [];
  loading:boolean=false;
  constructor(
    private fb: FormBuilder,
    private customAuthService: CustomAuthService,
    private toastService: CustomToastService,
    private cs:CommonService
  ) { }

  ngOnInit(): void {
    this.createForms();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  createForms() {
    this.forgotForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  // //  forget password form return method
  get f() {
    return this.forgotForm.controls;
  }

  forgotPassword() {
    this.loading=true;
    if (this.forgotForm.invalid) {
      this.forgotFormError = true;
      this.loading=false;
      return;
    } else {
      this.forgotFormError = false;
      const request: ForgetPasswordRequest = this.forgotForm.value;
      const forgetSub = this.customAuthService
        .forgetPassword(request)
        .subscribe((res: any) => {
          this.toastService.showSuccess(res.data.message, 'Success');
          localStorage.setItem('resetEmail',this.forgotForm.value.email);
          this.forgotForm.reset();
          this.cs.navigate('/enterotp');
        },(err:any)=>{
          this.toastService.showError(err.error.error_description,'error');
          this.loading=false;
        });
      this.subscriptions.push(forgetSub);
    }
  }
}
