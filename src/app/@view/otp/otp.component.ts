import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { VERIFY_OTP } from 'src/app/@core/@utills/api-constant';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit,OnDestroy {
	one:any;
	two:any;
  three:any;
	four:any;
	five:any;
  six:any;
  email:any;
  constructor(private apiService: CustomApiService,private router:Router,private toastService: CustomToastService,private customAuthService:CustomAuthService
    ) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('resetEmail')
    if(!this.email){
      this.router.navigate(['/forgotpass']);
    }
  }
  ngOnDestroy(){
    localStorage.removeItem('resetEmail')
  }
  submitOtp(){
    let payload={
      email:this.email,
      otp: `${this.one}${this.two}${this.three}${this.four}`
    }
    this.apiService.httpRequest(VERIFY_OTP,payload).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('submitOtp','true');
      this.router.navigate(['/newpass',res.data.unique_code])

    },(err:any)=>{
      this.toastService.showError(err.error.error_description,'error')
    })
  }

resendOtp(){
  let request={
    email:this.email
  }
  this.customAuthService
        .forgetPassword(request)
        .subscribe((res: any) => {
          // this.activeModal.close();
          this.toastService.showSuccess(res.data.message, 'Success');
          // this.forgotForm.reset();
          // localStorage.setItem('resetEmail',this.forgotForm.value.email)
          // this.cs.navigate('/enterotp');
        })
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
}
