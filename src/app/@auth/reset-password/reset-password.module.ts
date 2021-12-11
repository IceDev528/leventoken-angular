import { ResetPasswordComponent } from './reset-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [ReactiveFormsModule, CommonModule, ResetPasswordRoutingModule,RouterModule],
})
export class ResetPasswordModule { }
