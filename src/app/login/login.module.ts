import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { LoginService } from './login.service';
import { MaterialModule} from '../shared';
import { ServicesModule } from '../shared/services/services.module';

@NgModule({
    imports: [
        CommonModule, LoginRoutingModule, FormsModule,
        MaterialModule,ServicesModule
    ],
    declarations: [LoginComponent],
    providers: [ 
        //LoginService 
    ]
})
export class LoginModule {}
