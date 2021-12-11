import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./@theme/layouts/basic/basic.module').then((m) => m.BasicModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./@theme/layouts/header-layout/header-layout.module').then((m) => m.HeaderLayoutModule),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./@theme/layouts/complete-layout/complete-layout.module').then((m) => m.CompleteLayoutModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./@theme/layouts/blank/blank.module').then((m) => m.BlankModule),
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./@theme/layouts/admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
