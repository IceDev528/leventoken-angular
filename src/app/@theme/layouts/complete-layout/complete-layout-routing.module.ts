import { CompleteLayoutComponent } from './complete-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CompleteLayoutComponent,
    children: [
      // {
      //   path: 'profile',
      //   loadChildren: () =>
      //     import('../../../@view/profile/profile.module').then(
      //       (m) => m.ProfileModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteLayoutRoutingModule {}
