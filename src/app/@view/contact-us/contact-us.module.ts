import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { Ng2TelInputModule } from 'ng2-tel-input';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { NumberModule } from 'src/app/@shared/@directives/number/number.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    // FormsModule,
    // NgxCaptchaModule,
    // ReactiveFormsModule,
    // NgbModule,
    // Ng2TelInputModule,
    // NumberModule,
    // HttpClientModule,
  ]
})
export class ContactUsModule { }
