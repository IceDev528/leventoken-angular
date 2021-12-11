import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferCoinComponent } from './refer-coin.component';

const routes: Routes = [{ path: '', component: ReferCoinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferCoinRoutingModule {}
