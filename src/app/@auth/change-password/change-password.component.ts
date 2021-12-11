import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { SpaceValidators } from 'src/app/@shared/@validators/space.validator';
import { CustomAuthService } from '../auth-module.service';
import { ChangePasswordRequest } from './change-password.model';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  isResponsive: boolean=false;
  subscriptions: Subscription[] = [];
  changePasswordForm: any;
  changeFormError: boolean=false;
  saveLoading: boolean=false;
  mustMatch: boolean=false;

  oldInputType = 'password';
  newInputType = 'password';
  confirmInputType = 'password';

  constructor(
    private customAuthService: CustomAuthService,
    private toastService: CustomToastService,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createBrandForm();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  createBrandForm() {
    this.changePasswordForm = this.fb.group({
      // old_password: [
      //   '',
      //   [
      //     Validators.required,
      //     SpaceValidators.canNotContainSpace,
      //     Validators.minLength(8),
      //   ],
      // ],
      new_password: [
        '',
        [
          Validators.required,
          SpaceValidators.canNotContainSpace,
          Validators.minLength(8),
          Validators.pattern(/^(?=(.*\d.*){1,})(?=(.*[a-zA-Z].*){1,})/),
        ],
      ],
      confirm_password: ['', [Validators.required, SpaceValidators.canNotContainSpace, Validators.minLength(8), Validators.pattern(/^(?=(.*\d.*){1,})(?=(.*[a-zA-Z].*){1,})/)]],
    });
  }
  // // form retrun function starts here
  get f() {
    return this.changePasswordForm.controls;
  }

  changePassword() {
    // this.saveLoading = true;

    // if (this.changePasswordForm.value.new_password != this.changePasswordForm.value.confirm_password) {
    //   this.mustMatch = true;
    //   this.saveLoading = false;
    //   return;
    // }
    // else
    //   this.mustMatch = false

    // if (this.changePasswordForm.invalid) {
    //   this.changeFormError = true;
    //   this.saveLoading = false;
    //   return;
    // } else {
    //   this.changeFormError = false;

    //   const request: ChangePasswordRequest = {
    //     // old_password: this.changePasswordForm.value.old_password,
    //     new_password: this.changePasswordForm.value.new_password,
    //   };

    //   const changePasswordSub = this.customAuthService.changePassword(request).subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       this.toastService.showSuccess(res.message, 'Success');
    //       this.saveLoading = false;
    //       this.changePasswordForm.reset();
    //     },
    //     (err: any) => {
    //       console.log(err);
    //       this.toastService.showError(err.error.message, 'Error');
    //       this.saveLoading = false;
    //     });

    //   this.subscriptions.push(changePasswordSub);
    //   this.activeModal.dismiss();
    // }
  }

  // close(reason:any) {
  //   this.activeModal.dismiss(reason);
  // }
}
