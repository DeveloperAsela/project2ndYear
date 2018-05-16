import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';

import { SignupService } from '../shared/services';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    errorMsg = "Password don't match";
    magView = false;
    roles = [
        { value: 'Admin-0', viewValue: 'Admin' },
        { value: 'Customer-1', viewValue: 'Customer' },
        { value: 'Partner-2', viewValue: 'Partner' }
    ];
    constructor(private signupService:SignupService,private router:Router) { }

    ngOnInit() { }

    register(form) {
        let data = form.value;
        data['R_ID'] = 2;
        //console.log(form.value);
        if (data.Password != data.confirmPassword) {
            this.magView = true;
        } else {
            this.magView = false;
            this.signupService.signup(data).subscribe(res=>{
                this.router.navigate(['/login']);
            });
        }
    }
}
