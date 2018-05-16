import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
//import { SignupService } from './signup.service';
import { MaterialModule} from '../shared';

import { ServicesModule } from '../shared/services/services.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SignupRoutingModule,
    MaterialModule,
    ServicesModule
  ],
  declarations: [SignupComponent],
  providers:[
    //SignupService
  ]
})
export class SignupModule { }
