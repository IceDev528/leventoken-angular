import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
})
export class ForgotPasswordModule { }
