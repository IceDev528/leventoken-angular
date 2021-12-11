import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';

@NgModule({
  declarations: [BlankComponent],
  imports: [CommonModule, BlankRoutingModule,RouterModule],
  providers: [
    BrowserModule,
    CommonService,
    CustomAuthService,
    CustomToastService,
    CustomApiService,
    DataUpdateService,
  ],
})
export class BlankModule { }
