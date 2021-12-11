import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from 'src/app/@auth/auth.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';
import { HeaderLayoutRoutingModule } from './header-layout-routing.module';
import { HeaderLayoutComponent } from './header-layout.component';
import { CommonService } from 'src/app/@core/@services/common.service';
import { CustomAuthService } from 'src/app/@auth/auth-module.service';
// import { CustomToastService } from 'src/app/@core/@services/toast.service';
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { DataUpdateService } from 'src/app/@core/@services/data.service';

@NgModule({
  declarations: [HeaderLayoutComponent],
  imports: [CommonModule, HeaderLayoutRoutingModule, FooterModule, HeaderModule],
  providers: [CommonService,
    CustomAuthService,
    // CustomToastService,
    CustomApiService,
    DataUpdateService,]
})
export class HeaderLayoutModule { }
