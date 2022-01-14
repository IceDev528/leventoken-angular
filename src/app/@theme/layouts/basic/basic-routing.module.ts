import { BasicComponent } from "./basic.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/@core/@guards/auth.guard";
// import { HomeComponent } from 'src/app/@view/home/home.component';
// import { ProfileComponent } from 'src/app/@view/profile/profile.component';
// import { ReferCoinComponent } from 'src/app/@view/refer-coin/refer-coin.component';

const routes: Routes = [
  {
    path: "",
    component: BasicComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../../../@view/home/home.module").then((m) => m.HomeModule),
      },

      {
        path: "otp",
        loadChildren: () =>
          import("../../../@view/otp/otp.module").then((m) => m.OtpModule),
      },
      // {
      //   path: "refer",
      //   canActivate: [AuthGuard],
      //   loadChildren: () =>
      //     import("../../../@view/refer-coin/refer-coin.module").then(
      //       (m) => m.ReferCoinModule
      //     ),
      // },
      {
        path: "profile",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("../../../@view/profile/profile.module").then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: "leven-token/:city_name/:state_name/:country_name",
        loadChildren: () =>
          import(
            "../../../@view/leven-token-posting/leven-token-posting.module"
          ).then((m) => m.LevenTokenPostingModule),
      },
      {
        path:'leven_token_story/:crypto_name',
        loadChildren: () =>
            import('../../../@view/leven-token-story/leven-token-story.module').then(
              (m) => m.LevenTokenStoryModule
            ),
      },
      // {
      //   path: 'terms-of-use',
      //   loadChildren: () =>
      //     import('../../../@view/terms-of-use/terms-of-use.module').then(
      //       (m) => m.TermsOfUseModule
      //     ),
      // },
      // {
      //   path: 'about-us',
      //   loadChildren: () =>
      //     import('../../../@view/about-us/about-us.module').then(
      //       (m) => m.AboutUsModule
      //     ),
      // },
      // {
      //   path: 'user',
      //   loadChildren: () =>
      //     import('../../../@view/users/users.module').then(
      //       (m) => m.UsersModule
      //     ),
      // },
      // // {
      // //   path: 'example',
      // //   loadChildren: () =>
      // //     import('../../../@examples/examples/examples.module').then(
      // //       (m) => m.ExamplesModule
      // //     ),
      // // },
      // {
      //   path: 'contact-us',
      //   loadChildren: () =>
      //     import('../../../@view/contact-us/contact-us.module').then(
      //       (m) => m.ContactUsModule
      //     ),
      // },
      // {
      //   path: 'account',
      //   loadChildren: () =>
      //     import('../../../@view/account/account.module').then(
      //       (m) => m.AccountModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {}
