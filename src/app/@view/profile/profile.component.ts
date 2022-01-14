import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
// import { User } from 'src/app/@shared/@models/user.model';
import { SpaceValidators } from 'src/app/@shared/@validators/space.validator';
import { ProfileService } from './profile.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { DataService } from 'src/app/@core/@services/data.service1';
import { CommonService } from 'src/app/@core/@services/common.service';
import { IMAGE_URL } from 'src/app/@core/@utills/constant';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EMAIL_VERIFICATION, EMAIL_VERIFICATION_OTP, VERIFY_OTP } from 'src/app/@core/@utills/api-constant';

declare var google: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  // changePasswordForm: FormGroup;
  // editProfileForm: FormGroup;
  // password_submit: boolean;
  // old_password_errors: any;
  // session: any;
  // change_email_error: string;
  // email_submit: boolean;
  // changeEmail1: any;
  // currentPass: any;
  // newPass: any;
  // pass: any;
  // deactivate_error: string;
  // deactivate_submit: boolean;
  // deactivateForm: FormGroup;
  // add_event_submit: boolean;
  // isSocialLogin: any;
  // change_password_error: string;
  // isEmailVerified: number;
  // oldInputType = 'password';
  // deactivateLoading = false;
  // saveLoading: boolean;
  profileData:any;
  countryCode:any;
  contactDetailForm:FormGroup;
  code:any;
  countryabbr:any;
  imgUrl=IMAGE_URL;
  changePasswordForm:FormGroup;
  oldPasswordInputType='password';
  passwordInputType='password'
  confirmPasswordInputType="password"
  changePasswordFormError:boolean=false;
  mustMatch:boolean=false;
	one:any;
	two:any;
  three:any;
  four:any;
  optRequested:boolean=false;
  newImgUrl:any='';
  userNameShort:any='';
  isLoader:boolean=false;
  constructor(
    private profileService: ProfileService,
    private apiService:CustomApiService,
    private update: DataService,
    private router: Router,
    private fb: FormBuilder,
    private updatedata: DataUpdateService,
    private toastService: CustomToastService,
    private cs:CommonService,
    private activeModal: NgbActiveModal,
    public modalService: NgbModal,
  ) { }

  ngOnInit() {
  //   //  this.update.changeCartCount(true);
  //   //  this.update.changeUnreadMessageCount(true)
  //   this.session = JSON.parse(localStorage.getItem('session'));
  //   this.isSocialLogin = JSON.parse(localStorage.getItem('isSocialLogin'));

  //   if (this.session && this.session.user && this.session.user.is_verified) {
  //     this.isEmailVerified = 1;
  //   } else {
  //     this.isEmailVerified = 0;
  //   }

  //   console.log(this.session.user);

  //   // this.getProfile();
  //   this.createPasswordForm();
  //   this.createEditForm();
  //   this.createDeactivateForm();

  //   this.getUserInfo();
  this.getProfileInfo();
  this.CreateForms();

    this.updatedata.updateChangeObservable.subscribe((res:any) => {
      if (res) {
        this.getProfileInfo();
        this.updatedata.changeValue(false);
      }
    });
    //  this.update.changefooter(true);
  }
  open(content:any) {
    this.modalService.dismissAll();
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  closeModal(){
    this.activeModal.close();

  }
  resendOtp(content:any,modal:any){
this.sendOtp(content,modal,false);
  }
  sendOtp(content:any,modal:any,openModal?:any){
    let payload={
      email:this.profileData.email
    }
    let otp = this.apiService.httpRequest(EMAIL_VERIFICATION_OTP,payload).subscribe((res:any)=>{
      if(openModal){
        this.modalService.dismissAll();
        modal.click();
        this.open(content);
      }

      this.toastService.showSuccess(res.data.message,'success');
    })
    this.subscriptions.push(otp);
  }
  verifyOtp(){
    let payload={
      // email:this.email,
      otp: `${this.one}${this.two}${this.three}${this.four}`
    }
    this.apiService.httpRequest(EMAIL_VERIFICATION,payload).subscribe((res)=>{
      console.log(res);
      this.modalService.dismissAll();
      this.profileData.email_verified=true;
      // localStorage.setItem('submitOtp','true');
      // this.router.navigate(['/newpass',res.data.unique_code])

    },(err:any)=>{
      this.toastService.showError(err.error.error_description,'error')
    })
  }

  uploadImg(event:any,isSave:any){
    console.log(event);

    let file = <File>event.target.files[0];
    if(file){
      this.isLoader=true;
    }
    const formData: FormData = new FormData();
    formData.append('file', file);
    this.profileService.uploadPic(formData).subscribe(
      (res: any) => {
        // this.toastService.showSuccess(res.message,'')
        if(isSave){
          this.profileData.profile_pic =res.data.file_url;
          this.isLoader=false;
          let payload = {
            profile_pic: res.data.file_url,
          };
          this.profileService.setPersonalInfo(payload).subscribe(
            (data: any) => {
              this.toastService.showSuccess(data.message, 'Success');
              this.updatedata.changeValue(true);
               this.update.changeProfileData(true);

              //  this.spinner.hide();
              this.profileData = data.data[0];
              this.countryCode = this.profileData.country_code;
              this.createPersonalInfoForm();
              // this.getProfileInfo();
              // this.isEdit = false;
              // this.saveLoading = false;
            },
            (err: HttpErrorResponse) => {
              // this.saveLoading = false;
              if (err.status == 403) {
                this.toastService.showError(err.error.message, 'Error');
                this.router.navigate(['/']);
              }
              if (err.status == 401) {
                //  this.update.changeLoginPopup(true);
              }
            }
          );
        }else{
          this.newImgUrl=res.data.file_url;
          this.isLoader=false;
        }


      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getProfileInfo() {
   let getProfile= this.profileService.getProfile('').subscribe((res: any) => {
      this.profileData = res.data;
      if(!this.profileData.profile_pic){
        let name =this.profileData.name.split(' ')
        let fChar=name[0][0];
        let lChar='';
        if(name[1]){
          lChar=name[1][0]
        }
        this.userNameShort= fChar + lChar;
        this.userNameShort=  this.userNameShort.toUpperCase();
      }
      this.createPersonalInfoForm();
      this.countryCode = this.profileData.country_code;
    },(err:any)=>{
      if (err.status == 403) {
        this.toastService.showError(err.error.error_description, 'Error');
        localStorage.clear();
        this.router.navigate(['']);
      }else if (err.status == 401) {
        localStorage.clear();
        this.toastService.showError(err.error.error_description, 'Error');
        this.router.navigate(['/login']);
        //  this.update.changeLoginPopup(true);
      }else{
        this.toastService.showError(err.error.error_description, 'Error');
      }
    });
    this.subscriptions.push(getProfile);

  }

  saveProfile(modalClose:any){
    if( this.contactDetailForm .invalid){
      return
    }
    let req = this.contactDetailForm.value;
    if(this.newImgUrl){
      req.profile_pic =this.newImgUrl;
    }
    // req.profile_pic='sdsd'
   let saveProfile= this.profileService.setPersonalInfo(req).subscribe((res:any)=>{
              this.profileData=res.data[0];
              this.getProfileInfo();
              modalClose.click();
              if(this.newImgUrl){
                this.updatedata.changeValue(true);

                this.update.changeProfileData(true);
              }

              this.toastService.showSuccess(res.message, 'Success');
              console.log(res);
              // this.saveLoading = false;
            },
            (err: HttpErrorResponse) => {
              // this.saveLoading = false;
              if (err.status == 403) {
                this.toastService.showError(err.error.message, 'Error');
                this.router.navigate(['/']);
              }
              if (err.status == 401) {
                //  this.update.changeLoginPopup(true);
              }
            } );
    this.subscriptions.push(saveProfile);

  }
  editProfile(){
    this.newImgUrl='';
  }

  CreateForms() {
    this.createPersonalInfoForm();
    this.createChangePasswordForm();


  }
  createPersonalInfoForm(){
    this.contactDetailForm = this.fb.group({
      name:[
        this.profileData?.name,Validators.compose([
          Validators.required
        ])
      ],
      phone_no: [
        this.profileData?.phone_no ? this.profileData.phone_no : '',
        Validators.compose([
          Validators.required,
          this.cs.noWhitespaceValidator,
          Validators.maxLength(12),
          Validators.minLength(8),
          // Validators.pattern(/^(?=(.[0-9]+$){1,})/),
          // Validators.pattern('^((\\+91-?)|0)?[0-9]$'),
        ]),
      ],
      // country_abv: ["" ? "" : "", []],
      // country_code: ["" ? "" : "", []],
      wallet_address:[
        this.profileData?.wallet_address,Validators.compose([
        ])
      ],
      email: new FormControl(
        {value:this.profileData?.email ? this.profileData.email : '',disabled:this.profileData?.email_verified?true:false},
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
      ),
      country_code: [
        this.profileData?.country_code ? this.profileData.country_code : '',
      ],
    });
  }
  createChangePasswordForm(){
    this.changePasswordForm = this.fb.group({
      old_password: ['', [Validators.required]],
      new_password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=(.*\d.*){1,})(?=(.*[a-zA-Z].*){1,})/),
        ],
      ],
      confirm_password: [
        '',
        [
          Validators.required,
          // Validators.minLength(8),
          // Validators.pattern(/^(?=(.*\d.*){1,})(?=(.*[a-zA-Z].*){1,})/),
        ],
      ],
    });
  }
  resetChangePassForm(){
    this.changePasswordForm.reset();
  }
  changePassword(modalClose:any){
    if( this.changePasswordForm .invalid){
      this.changePasswordFormError=true;
      return
    }else{
      if(this.changePasswordForm.value.new_password !=this.changePasswordForm.value.confirm_password){
        this.mustMatch=true;
        this.changePasswordFormError=true;
        return

      }
    }
    this.mustMatch=false;
    this.changePasswordFormError=false;


    let req = this.changePasswordForm.value;
    // req.profile_pic='sdsd'
  let changepass=  this.profileService.changePassword(req).subscribe((res:any)=>{
              this.profileData=res.data[0];
              // this.getProfileInfo();
              modalClose.click();
              this.toastService.showSuccess(res.message, 'Success');
              console.log(res);
              // this.saveLoading = false;
            },
            (err: HttpErrorResponse) => {
              // this.saveLoading = false;
              if (err.status == 403) {
                this.toastService.showError(err.error.message, 'Error');
                this.router.navigate(['/']);
              }
              if (err.status == 401) {
                //  this.update.changeLoginPopup(true);
              }else{
                this.toastService.showError(err.error.error_description, 'Error');
              }
            } );
  this.subscriptions.push(changepass);
  }
    // // create change password form
  // createPasswordForm() {

  // }
  getNumber(data:any) { }

  onCountryChange(data:any) {
    console.log(data);
    this.code = data.dialCode;
    this.countryabbr = data.iso2;
    this.contactDetailForm.patchValue({country_code:this.code})
  }
  telInputObject(obj:any) {
    this.countryCode = this.countryCode ? this.countryCode : obj.s.dialCode;
    if (this.countryCode) {
      // this.countryCode =this.countryCode.substring(1)
      this.countryCode =this.countryCode
      let itemMatched:any =[]
      obj.p.forEach((item:any) => {
        if (item.dialCode == this.countryCode) {
          itemMatched.push(item);
          return ;
        }
      });
      if (itemMatched && itemMatched.length > 0) {
        let priority=10000;
        let item:any='';
        itemMatched.forEach((countryItem:any)=>{
          if(countryItem.priority<priority){
            priority=countryItem.priority;
            item =countryItem;
          }

        // obj.setCountry(itemMatched[0].iso2);

        })
        obj.setCountry(item.iso2);

      } else {
        obj.setCountry('us');
        this.countryCode =+1;
        this.contactDetailForm.controls['country_code'].setValue(this.countryCode);
      }
    }
  }
  get f() {
    return this.contactDetailForm.controls;
  }
  get passForm() {
    return this.changePasswordForm.controls;
  }
  logOut(){
    this.apiService.logout();
  }

  copy(val: string){
    let msg = val;
    // navigator.clipboard.writeText(msg)
    if (navigator.clipboard && window.isSecureContext) {
     navigator.clipboard.writeText(msg);
  } else {
      const urlBox = document.createElement('textarea');
      urlBox.style.position = 'fixed';
      urlBox.style.left = '0';
      urlBox.style.top = '0';
      urlBox.style.opacity = '0';
      urlBox.value = msg;
      document.body.appendChild(urlBox);
      urlBox.focus();
      urlBox.select();
      document.execCommand('copy')
      document.body.removeChild(urlBox);
  }
    this.toastService.showSuccess('Copied to clipboard.', '');
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }
	goToNextInput(e:any) {
		var key = e.which,
			t = e.target,
			sib = t.nextElementSibling;
		if (key === 8) {
			return true;
		}
		if (key != 9 && (key < 48 || key > 57) && key < 96 && key > 105) {
			e.preventDefault();
			return false;
		}

		if (key === 9) {
			return true;
		}
		if (sib) {
			sib.select();
		}
	}

	onKeyDown(e:any) {
		var key = e.which;
		if (
			key === 8 ||
			key === 9 ||
			(key >= 48 && key <= 57) ||
			(key >= 96 && key <= 105)
		) {
			if (key === 8) {
				return this.goBackAndClear(e);
			}
			return true;
		}
		e.preventDefault();
		return false;
	}

	goBackAndClear(e:any) {
		let val = e.target.value;
		let sib = e.target.previousElementSibling;
		if (val) {
			return (val = "");
		} else if (!val) {
			return sib.select();
		}
  }



  // getUserInfo() {
  //   const request = {
  //     user_id: this.session.user ? this.session.user.id : null,
  //   };
  //   const userSub = this.profileService.getProfile(request).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       if (data) {
  //         localStorage.setItem(
  //           'session',
  //           JSON.stringify({
  //             user: data,
  //             user_token: JSON.parse(localStorage.getItem('session'))
  //               .user_token,
  //           })
  //         );
  //       }

  //       this.session = JSON.parse(localStorage.getItem('session'));
  //       this.isSocialLogin = JSON.parse(localStorage.getItem('isSocialLogin'));

  //       if (this.session && this.session.user.is_verified) {
  //         this.isEmailVerified = 1;
  //       } else {
  //         this.isEmailVerified = 0;
  //       }
  //     },
  //     (err: HttpErrorResponse) => {
  //       if (err.status == 403) {
  //         this.toastService.showError(err.error.message, 'Error');
  //         this.router.navigate(['/']);
  //       }
  //       if (err.status == 401) {
  //       }
  //     }
  //   );
  //   this.subscriptions.push(userSub);
  // }


  // editProfile() {
  //   this.session = JSON.parse(localStorage.getItem('session'));
  //   if (
  //     this.session.user.address != this.editProfileForm.value.address &&
  //     this.editProfileForm.value.lat == parseFloat(this.session.user.lat) &&
  //     this.editProfileForm.value.lng == parseFloat(this.session.user.lng)
  //   ) {
  //     this.editProfileForm.controls.lat.reset();
  //     this.editProfileForm.controls.lng.reset();
  //   }
  //   console.log(this.editProfileForm);

  //   if (
  //     this.editProfileForm.invalid &&
  //     !this.editProfileForm.value.lat &&
  //     !this.editProfileForm.value.lng
  //   ) {
  //     this.add_event_submit = true;
  //   } else {
  //     this.saveLoading = true;
  //     this.add_event_submit = false;

  //     const request: User = new User({
  //       first_name: this.editProfileForm.value.first_name,
  //       last_name: this.editProfileForm.value.last_name,
  //       phone_no: this.editProfileForm.value.phone_no,
  //       website: this.editProfileForm.value.website,
  //       address: this.editProfileForm.value.address,
  //       lat: this.editProfileForm.value.lat,
  //       lng: this.editProfileForm.value.lng,
  //       city: this.editProfileForm.value.city,
  //       state: this.editProfileForm.value.state,
  //       country: this.editProfileForm.value.country,
  //       zip_code: this.editProfileForm.value.zip_code,
  //     });

  //     console.log(request);

  //     const editProfileSub = this.profileService.editProfile(request).subscribe(
  //       (data) => {
  //         this.getUserInfo();
  //         this.toastService.showSuccess(data.message, 'Success');
  //         console.log(data);
  //         this.saveLoading = false;
  //       },
  //       (err: HttpErrorResponse) => {
  //         this.saveLoading = false;
  //         if (err.status == 403) {
  //           this.toastService.showError(err.error.message, 'Error');
  //           this.router.navigate(['/']);
  //         }
  //         if (err.status == 401) {
  //           //  this.update.changeLoginPopup(true);
  //         }
  //       }
  //     );
  //     this.subscriptions.push(editProfileSub);
  //   }
  // }

}
