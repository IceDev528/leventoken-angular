import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { Ng2TelInputModule } from 'ng2-tel-input';
// import { Ng2TelInputModule } from 'ng2-tel-input';
import { NumberModule } from 'src/app/@shared/@directives/number/number.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    Ng2TelInputModule,
    NumberModule,
    HttpClientModule,
    RouterModule,
    // NgxCaptchaModule,
    RecaptchaModule
  ],

})
export class SignUpModule { }
