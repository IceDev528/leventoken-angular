import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevenTokenStoryComponent } from './leven-token-story.component';

const routes: Routes = [
  {
    path:'',
    component:LevenTokenStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevenTokenStoryRoutingModule { }
