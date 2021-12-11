import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import {
//   AuthServiceConfig,
//   FacebookLoginProvider,
//   GoogleLoginProvider,
//   SocialLoginModule,
// } from 'angularx-social-login';
// import { FB_API_KEY, GOOGLE_API_KEY } from '../../@core/@utills/constant';
// import { FB_API_KEY, GOOGLE_API_KEY } from '../../@core/@utills/constant';
import { LoginComponent } from './login.component';

// export function provideConfig() {
//   return config;
// }

// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider(GOOGLE_API_KEY),
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider(FB_API_KEY),
//   },
// ]);
@NgModule({
  declarations: [LoginComponent],
  imports: [
    // SocialLoginModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: provideConfig,
    // },
  ],
})
export class LoginModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: LoginModule,
  //     providers: [],
  //   } as ModuleWithProviders;
  // }
}
