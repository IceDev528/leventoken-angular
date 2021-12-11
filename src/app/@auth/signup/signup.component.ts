import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { DataService } from 'src/app/@core/@services/data.service1';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { SpaceValidators } from 'src/app/@shared/@validators/space.validator';
import { CustomAuthService } from '../auth-module.service';
import { SignupRequest } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  passwordInputType = 'password';
  confirmpasswordInputType = 'password';
  signUpForm: FormGroup;
  saveLoading: boolean;
  signUpFormError: boolean;
  subscriptions: Subscription[] = [];
  mustMatch: boolean;
  countryCode = 1;
  code: any;
  countryabbr: any;
  user: any;
  saveLoading1: boolean;
shownumber:boolean=false;
  constructor(
    private fb: FormBuilder,
    private cs: CommonService,
    private customAuthService: CustomAuthService,
    private toastService: CustomToastService,
    private update: DataUpdateService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.createForms();
    setTimeout(()=>{
      this.shownumber=true;
    },100)
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  createForms() {
    this.signUpForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          this.cs.noWhitespaceValidator,
        ]),
      ],
      phone_no: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      country_abv: [''],
      country_code: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          SpaceValidators.canNotContainSpace,
          Validators.minLength(8),
          Validators.pattern(/^(?=(.*\d.*){1,})(?=(.*[a-zA-Z].*){1,})/),
        ]),
      ],
      referred_by:[''],
      confirm_password: [''],
    });
  }
  // //  login form return method
  get f() {
    return this.signUpForm.controls;
  }

  signupUser() {
    // true
    this.saveLoading = true;
    if (this.code) {
      this.signUpForm.patchValue({ country_code: this.code });
      this.signUpForm.patchValue({ country_abv: this.countryabbr });
    }

    this.signUpForm.value.phone_number = Number(
      this.signUpForm.value.phone_number
    );
    if (this.signUpForm.invalid) {
      this.signUpFormError = true;
      this.saveLoading = false;
      return;
    } else {
      if (
        this.signUpForm.value.password !==
        this.signUpForm.value.confirm_password
      ) {
        this.mustMatch = true;
        this.saveLoading = false;
        this.signUpFormError = true;
        return;
      } else {
        this.mustMatch = false;
        this.signUpFormError=false;
      }

      this.signUpFormError = false;
      const request: SignupRequest = {
        name: this.signUpForm.value.name,
        email: this.signUpForm.value.email,
        country_code: this.signUpForm.value.country_code,
        password: this.signUpForm.value.password,
        phone_no: this.signUpForm.value.phone_no,
        referred_by:this.signUpForm.value.referred_by
      };

      const signupSub = this.customAuthService.signUp(request).subscribe(
        (res: any) => {
          let accesstoken = res.data[0].access_token;
          this.cs.setCookie('bearer', accesstoken);
          localStorage.setItem('bearer', accesstoken);

          this.user = res.data[0];
          this.cs.setStrCookie('user', this.user);
          localStorage.setItem('user',JSON.stringify(this.user));
          this.toastService.showSuccess('SignUp successfully', 'Success');
          this.update.changeLoggedIn(1);
          this.dataService.changeLogin(1);
          this.saveLoading = false;
          this.cs.navigate('/profile');
        },
        (err: any) => {
          console.log(err);
          this.toastService.showError(err.error.error_description, 'Error');
          this.saveLoading = false;
        }
      );

      this.subscriptions.push(signupSub);
    }
  }

  getNumber(data:any) { }

  onCountryChange(data:any) {
    console.log(data);
    this.code = data.dialCode;
    this.countryabbr = data.iso2;
  }
  telInputObject(obj:any) {
    // this.code = this.signUpForm.value.country_code
    //   ? this.signUpForm.value.country_code
    //   : obj.s.dialCode;
    // if (this.code) {
    //   let itemMatched = obj.p.filter((item:any) => {
    //     if (item.dialCode == this.code) {
    //       return item;
    //     }
    //   });
    //   if (itemMatched && itemMatched.length > 0)
    //     // obj.setCountry(itemMatched[0].iso2);
    //     obj.setCountry('us')
    //   //obj.setCountry(this.profile.country_abv);
    // } else {
    //   // obj.setCountry('cd');
    this.code=1
      obj.setCountry('us');
      this.countryCode =1;
      this.signUpForm.controls['country_code'].setValue(this.countryCode);
    // }
  }
}
