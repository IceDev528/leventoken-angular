import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { CustomAuthService } from './@auth/auth-module.service';
import { CustomApiService } from './@core/@services/api.service';
import { CommonService } from './@core/@services/common.service';
import { DataUpdateService } from './@core/@services/data.service';
import { CustomToastService } from './@core/@services/toast.service';
import { LevenTokenPostingComponent } from './@view/leven-token-posting/leven-token-posting.component';
import { LevenTokenStoryComponent } from './@view/leven-token-story/leven-token-story.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LevenTokenPostingComponent,
    LevenTokenStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
