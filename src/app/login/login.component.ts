import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../shared/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    email;
    password;
    userId: string;
    isAdmin: boolean = false;
    isPartner: boolean = false;
    isCustomer: boolean = false;
    userInfo=[];

    constructor( public router: Router, private _loginService: LoginService ) {}
    msgShow=false;
    errorMsg = "Invalid UserName or Password";
    ngOnInit() {}
    

    onLoggedin(form) {
        let data = form.value;
        
         this._loginService.login(data).subscribe(res=>{
            let result:any=res;
        if(!result.Error){    
            this.afterLogin(result);
            this.afterLogin(''); 
             
         }else{
            this.msgShow = true;
            form.reset();
        }
       });
    }
    keyUp(){
        this.msgShow = false;
    }

    afterLogin(result){
       // this._loginService.logedUser = result;
      
       this.userInfo.push({'UserID':result.UserID,'R_ID':result.R_ID})
  
    //    console.log(this.userInfo[0].UserID)


        localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('userRole',this.userInfo[0].R_ID );
         localStorage.setItem('userId', this.userInfo[0].UserID );
        
        this.router.navigate(['/product']);
    }
    signup(){
        this.router.navigate(['/signup']); 
    }
}
