import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup.component';
// import { Ng2TelInputModule } from 'ng2-tel-input';
import { NumberModule } from 'src/app/@shared/@directives/number/number.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Ng2TelInputModule } from 'ng2-tel-input';

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
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
