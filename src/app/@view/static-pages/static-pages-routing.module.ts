import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'contact-us',
  //   loadChildren: () =>
  //     import('./@theme/layouts/complete-layout/complete-layout.module').then((m) => m.CompleteLayoutModule),
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
