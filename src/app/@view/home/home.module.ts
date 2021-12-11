import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { LazyImgModule } from 'src/app/@shared/@directives/lazy-img/lazy-img.module';
import { RouterModule } from '@angular/router';
import { LazyImgModule } from 'src/app/@shared/@directives/lazy-img/lazy-img.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimecountModule } from 'src/app/@shared/@directives/time-count/timecount.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    LazyImgModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TimecountModule
  ]
})
export class HomeModule { }
