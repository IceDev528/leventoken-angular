import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
// import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CONTACT_US } from 'src/app/@core/@utills/api-constant';
// import { CustomAuthService } from 'src/app/@auth/auth-module.service';
// import { CustomApiService } from 'src/app/@core/@services/api.service';
// import { DataUpdateService } from 'src/app/@core/@services/data.service';
// import { DataService } from 'src/app/@core/@services/data.service1';
// import { CustomToastService } from 'src/app/@core/@services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('about') about: any;
  @ViewChild('contact') contact: any;
  @ViewChild('audit') audit: any;
  videoUrl='https://www.youtube.com/embed/Ml3WsQ41GWs?rel=0'
  safeVideoUrl:any='';

  token: string;
  contactUsForm:FormGroup;
  // slides: string[];
  subscriptions: Subscription[] = [];
  saveLoading:boolean=false;
  contactUsFormError:boolean=false;

  slides = [

  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "arrows": false
  };

  slideConfigTwo = {
    infinite: true,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  };
  endDate=new Date('01 March 2022')

  // testimgs: string[];


  // testConfig = {
  //   infinite: true,
  //   draggable: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   dots: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '0px',
  //         slidesToShow: 1,
  //         slidesToScroll: 3
  //       }
  //     },

  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '0px',
  //         slidesToShow: 1,
  //         slidesToScroll: 3,
  //       }
  //     },

  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '0px',
  //         slidesToShow: 1,
  //         slidesToScroll: 3,
  //         dots: false
  //       }
  //     }
  //   ]

  // };


  constructor(
    private fb: FormBuilder,
    private cs:CommonService,
    private customAuthService: CustomAuthService,
    private toastService: CustomToastService,
    private route: ActivatedRoute,
    // private router: Router,
    // private dataService: DataService,
    private _sanitizer: DomSanitizer,
    private update: DataUpdateService, private apiService: CustomApiService,

  ) {
    this.safeVideoUrl= this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl)
    this.token = this.route.snapshot.paramMap.get('token') as string;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.createForms();
    if (this.token) {
      this.verifyEmail();
    }
    this.scrollViews()
  }

  scrollViews(){
    this.update.about.subscribe((res:any)=>{
      if(res){
        this.scrollToAbout();
      }
    })
    this.update.contact.subscribe((res:any)=>{
      if(res){
        this.scrollToContact();
      }
    })
    this.update.audit.subscribe((res:any)=>{
      if(res){
        this.scrollToAudit();
      }
    })
  }


  scrollToAbout() {
    this.about.nativeElement.scrollIntoView({ behavior: "smooth",block: "center" });
  }
  scrollToContact() {
    this.contact.nativeElement.scrollIntoView({ behavior: "smooth",block: "center"});
  }
  scrollToAudit() {
    this.audit.nativeElement.scrollIntoView({ behavior: "smooth",block: "center" });
  }

  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }

  scroll() {
    (document.querySelector('#about') as any).scrollIntoView({ behavior: 'smooth', block: 'center' });
 }


 scrolltoken() {
  (document.querySelector('#distribution') as any).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

  contactUs() {
    if (this.contactUsForm.invalid) {
      this.contactUsFormError = true;
      this.saveLoading = false;
      return;
    }

    this.contactUsFormError = false;
    let request=this.contactUsForm.value
    const contactUsSub = this.apiService.httpRequest(CONTACT_US,request).subscribe(
          (res:any) => {
            this.saveLoading = false;
            this.toastService.showSuccess(res.message, 'Success');
            this.contactUsForm.reset();
            this.handleReset();
          },
          (err:any) => {
            this.toastService.showError(err.error.message, 'Error');
            this.saveLoading = false;
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
        this.subscriptions.push(contactUsSub);
  }

  handleReset() {
    // this.captchaElem.resetCaptcha();
    // this.captchaElem.reloadCaptcha();
  }
 createForms() {
    this.contactUsForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          this.cs.noWhitespaceValidator,
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', [Validators.required]],
    });
  }
  get f() {
    return this.contactUsForm.controls;
  }




  verifyEmail() {
    // let request = {
    //   token: this.token
    // }

    // const verifyEmailSub = this.customAuthService.verifyEmail(request).subscribe(
    //   (res:any) => {
    //     this.toastService.showSuccess(res.message, 'Success');
    //     this.router.navigate(['/']);
    //   },
    //   (err:any) => {
    //     this.router.navigate(['/']);
    //     // this.toastService.showError(err.error.message, 'Error');
    //     console.log(err);
    //     // if (err.status === 0) {
    //     //   this.toastService.showWentWrong();
    //     // } else if (err.status === 400) {
    //     //   this.toastService.showError(err.error.message, 'Error');
    //     // } else {
    //     //   this.toastService.showWentWrong(err.error.message);
    //     // }
    //   }
    // );
    // this.subscriptions.push(verifyEmailSub);
  }

}

