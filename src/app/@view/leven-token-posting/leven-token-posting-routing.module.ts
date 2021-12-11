import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevenTokenPostingComponent } from './leven-token-posting.component';

const routes: Routes = [
  {
    path:'',
    component:LevenTokenPostingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevenTokenPostingRoutingModule { }
