import { HeaderLayoutComponent } from './header-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/@core/@guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HeaderLayoutComponent,
    children: [
      {
        path: "refer",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("../../../@view/refer-coin/refer-coin.module").then(
            (m) => m.ReferCoinModule
          ),
      },
      // {
      //   path: "inbox",
      //   loadChildren: () =>
      //     import(
      //       "../../../@view/inbox/inbox.module"
      //     ).then((m) => m.InboxModule),

      // },
      // {
      //   path: "inbox/:id",
      //   loadChildren: () =>
      //     import(
      //       "../../../@view/inbox/inbox.module"
      //     ).then((m) => m.InboxModule),
      // },
      // {
      //   path: "inbox/:id/:user",
      //   loadChildren: () =>
      //     import(
      //       "../../../@view/inbox/inbox.module"
      //     ).then((m) => m.InboxModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderLayoutRoutingModule { }
