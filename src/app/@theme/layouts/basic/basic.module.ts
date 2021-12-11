import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from 'src/app/@auth/auth.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { CommonService } from 'src/app/@core/@services/common.service';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    FooterModule,
    HeaderModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    BrowserModule,
    CommonService,
    CustomAuthService,
    CustomToastService,
    CustomApiService,
    DataUpdateService,
    CookieService
  ],
})
export class BasicModule {}
