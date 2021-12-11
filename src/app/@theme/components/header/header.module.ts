import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { DataUpdateService } from 'src/app/@core/@services/data.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
import { CommonService } from 'src/app/@core/@services/common.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CommonService,
    CustomAuthService,
    CustomToastService,
    CustomApiService,
    DataUpdateService,
    CookieService,
    NgbActiveModal
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
