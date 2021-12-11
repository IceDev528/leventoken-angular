import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevenTokenPostingComponent } from './@view/leven-token-posting/leven-token-posting.component';
import { CommonService } from './@core/@services/common.service';
import { CustomAuthService } from './@auth/auth-module.service';
import { CustomToastService } from './@core/@services/toast.service';
import { CustomApiService } from './@core/@services/api.service';
import { DataUpdateService } from './@core/@services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LevenTokenPostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    HttpClientModule,
    BrowserAnimationsModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
