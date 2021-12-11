import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangePasswordModule } from 'src/app/@auth/change-password/change-password.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';
import { SidebarModule } from '../../components/sidebar/sidebar/sidebar.module';
import { CompleteLayoutRoutingModule } from './complete-layout-routing.module';
import { CompleteLayoutComponent } from './complete-layout.component';

@NgModule({
  declarations: [CompleteLayoutComponent],
  imports: [
    CommonModule,
    CompleteLayoutRoutingModule,
    ChangePasswordModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
  ],
})
export class CompleteLayoutModule { }
