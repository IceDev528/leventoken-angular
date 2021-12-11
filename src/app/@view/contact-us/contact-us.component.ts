import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { CustomAuthService } from 'src/app/@auth/auth-module.service';
// import { CommonService } from 'src/app/@core/@services/common.service';
// import { DataUpdateService } from 'src/app/@core/@services/data.service';
// import { CustomToastService } from 'src/app/@core/@services/toast.service';
// import { ContactUsRequest } from './contact-us.model';
// import { ReCaptcha2Component } from 'ngx-captcha';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  // @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  // @ViewChild('langInput') langInput: ElementRef;

  // public captchaIsLoaded = false;
  // public captchaSuccess = false;
  // public captchaIsExpired = false;
  // public captchaResponse?: string;

  // public theme: 'light' | 'dark' = 'light';
  // public size: 'compact' | 'normal' = 'normal';
  // public lang = 'en';
  // public type: 'image' | 'audio';

  // subscriptions: Subscription[] = [];
  // contactUsForm: FormGroup;
  // code: any;
  // countryabbr: any;
  // contactUsFormError: boolean;
  // saveLoading: boolean;

  // constructor(private cs: CommonService, private fb: FormBuilder, private route: ActivatedRoute,
  //   private router: Router, private toastService: CustomToastService, private customAuthService: CustomAuthService,
  // ) {
  // }

  ngOnInit(): void {
    // this.createForms();
    // this.handleReset();
  }

  // handleSuccess(data) {
  //   console.log(data);
  // }

  // handleReset() {
  //   this.captchaElem.resetCaptcha();
  //   this.captchaElem.reloadCaptcha();
  // }

  // createForms() {
  //   this.contactUsForm = this.fb.group({
  //     first_name: [
  //       '',
  //       Validators.compose([
  //         Validators.required,
  //         this.cs.noWhitespaceValidator,
  //       ]),
  //     ],
  //     last_name: [
  //       '',
  //       Validators.compose([
  //         Validators.required,
  //         ,
  //         this.cs.noWhitespaceValidator,
  //       ]),
  //     ],
  //     phone_number: [
  //       '',
  //       Validators.compose([
  //         Validators.required,
  //         this.cs.noWhitespaceValidator,

  //       ]),
  //     ],
  //     country_abv: ["" ? "" : "", []],
  //     country_code: ["" ? "" : "", []],
  //     email: ['', Validators.compose([Validators.required, Validators.email])],
  //     message: ['', [Validators.required]],
  //     recaptcha: ['', Validators.required],
  //   });
  // }


  // get f() {
  //   return this.contactUsForm.controls;
  // }

  // navigate(url) {
  //   // this.activeModal.dismiss();
  //   this.cs.navigate(url);
  // }

  // getNumber(data) { }

  // onCountryChange(data) {
  //   console.log(data);
  //   this.code = data.dialCode;
  //   this.countryabbr = data.iso2;
  // }

  // telInputObject(obj) {
  //   this.code = this.contactUsForm.value.country_code ? this.contactUsForm.value.country_code : obj.s.dialCode;
  //   if (this.code) {

  //     let itemMatched = obj.p.filter((item) => { if (item.dialCode == this.code) { return item } });
  //     if (itemMatched && itemMatched.length > 0)
  //       obj.setCountry(itemMatched[0].iso2);
  //     //obj.setCountry(this.profile.country_abv);
  //   } else {
  //     obj.setCountry("cd");
  //   }
  // }

  // contactUs() {
  //   this.saveLoading = true;
  //   if (this.code) {
  //     this.contactUsForm.patchValue({ country_code: this.code });
  //     this.contactUsForm.patchValue({ country_abv: this.countryabbr });
  //   }

  //   this.contactUsForm.value.phone_number = Number(
  //     this.contactUsForm.value.phone_number
  //   );

  //   if (this.contactUsForm.invalid) {
  //     this.contactUsFormError = true;
  //     this.saveLoading = false;
  //     return;
  //   }

  //   this.contactUsFormError = false;

  //   const request: ContactUsRequest = {
  //     first_name: this.contactUsForm.value.first_name,
  //     last_name: this.contactUsForm.value.last_name,
  //     email: this.contactUsForm.value.email,
  //     country_code: this.contactUsForm.value.country_code,
  //     phone_number: this.contactUsForm.value.phone_number,
  //     message: this.contactUsForm.value.message,
  //     recaptcha: this.contactUsForm.value.recaptcha,
  //   }
  //   console.log(request);

  //   const contactUsSub = this.customAuthService.contactUs(request).subscribe(
  //     (res) => {
  //       this.saveLoading = false;
  //       this.toastService.showSuccess(res.message, 'Success');
  //       this.contactUsForm.reset();
  //       this.handleReset();
  //     },
  //     (err) => {
  //       this.toastService.showError(err.error.message, 'Error');
  //       this.saveLoading = false;
  //       console.log(err);
  //       if (err.status === 0) {
  //         this.toastService.showWentWrong();
  //       } else if (err.status === 400) {
  //         this.toastService.showError(err.error.message, 'Error');
  //       } else {
  //         this.toastService.showWentWrong(err.error.message);
  //       }
  //     }
  //   );
  //   this.subscriptions.push(contactUsSub);
  // }
}
