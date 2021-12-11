import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { MustMatch } from 'src/app/@shared/@validators/must-match.validator';
import { CustomAuthService } from '../auth-module.service';
import { Subscription } from 'rxjs';
import { ResetPasswordRequest } from './reset-password.model';
import { SpaceValidators } from 'src/app/@shared/@validators/space.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  windowHeight: number;
  showPasswordOfPassField: boolean;
  showPasswordOfConfirmPassField: boolean;
  resetPasswordForm: FormGroup;
  reset_submit: boolean;
  token: any;
  hasError: boolean;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private customAuthService: CustomAuthService,
    private toastService: CustomToastService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  ngOnInit() {
    let isValid=localStorage.getItem('submitOtp')
    if(!isValid){
      this.router.navigate(['/forgotpass']);
    }
    this.createResetForm();
  }

  ngOnDestroy() {
    localStorage.removeItem('submitOtp')
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  createResetForm() {
    this.resetPasswordForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            SpaceValidators.canNotContainSpace,
            Validators.minLength(8),
            Validators.pattern(/^(?=(.*\d.*){1,})(?=(.*[a-zA-Z].*){1,})/),
          ],
        ],
        confirm_password: ['', [Validators.required]],
        token: [this.token],
      },
      {
        validator: MustMatch('password', 'confirm_password'),
      }
    );
  }
  get f() {
    // console.log(this.loginForm.controls)
    return this.resetPasswordForm.controls;
  }

  resetPassword() {
    if (this.resetPasswordForm.invalid) {
      this.reset_submit = true;
    } else {
      this.reset_submit = false;

      const request: ResetPasswordRequest = {
        unique_code: this.token,
        password: this.resetPasswordForm.value.password,
      };
      const resetSub = this.customAuthService.resetPassword(request).subscribe(
        (res:any) => {
          this.toastService.showSuccess(res.message, 'Success');
          this.router.navigate(['/']);
        },
        (err:any) => {
          this.router.navigate(['/']);
          this.toastService.showError(err.error.message?err.error.message:err.error.error_description, 'Error');
          console.log(err);
          if (err.status === 0) {
            this.toastService.showWentWrong();
          } else if (err.status === 400) {
            this.toastService.showError(err.error.message, 'Error');
          } else {
            this.toastService.showWentWrong(err.error.message);
          }
        }
      );
      this.subscriptions.push(resetSub);
    }
  }
}
