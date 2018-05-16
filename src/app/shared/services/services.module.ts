import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MainApiService,ProductService,LoginService,SignupService,UserService } from './';

const Services=[
    MainApiService,
    ProductService,
    LoginService,
    SignupService,
    UserService
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule

    ],
  declarations: [],
  providers:[Services]
})
export class ServicesModule { }
