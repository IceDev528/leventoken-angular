import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { StaticPagesComponent } from '../static-pages/static-pages.component';


@NgModule({
  declarations: [ContactUsComponent, StaticPagesComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
