import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NumberModule } from 'src/app/@shared/@directives/number/number.module';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    // GooglePlaceModule,
    NumberModule,
  ]
})
export class ProfileModule { }
