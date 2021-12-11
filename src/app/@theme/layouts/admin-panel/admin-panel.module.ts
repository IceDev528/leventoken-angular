import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangePasswordModule } from 'src/app/@auth/change-password/change-password.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';
import { SidebarModule } from '../../components/sidebar/sidebar/sidebar.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel.routing.module';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    ChangePasswordModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
  ],
})
export class AdminPanelModule { }
