import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    user = "";
    constructor(private router:Router,private loginService:LoginService) {}

    ngOnInit() {
        this.user=this.loginService.logedUser.Fname;
    }
    logout(){
        this.router.navigate(['/login']);
    }
}
