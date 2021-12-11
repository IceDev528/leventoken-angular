import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferCoinRoutingModule } from './refer-coin-routing.module';
import { ReferCoinComponent } from './refer-coin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReferCoinComponent],
  imports: [
    CommonModule,
    ReferCoinRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReferCoinModule { }
