 import { Injectable } from '@angular/core';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
 import { MainApiService } from '.';

 @Injectable()
 export class LoginService {
    logedUser={
        Fname:'User1'
    };
     constructor(private mainApiService:MainApiService) { }

     login(userInfo){
        return this.mainApiService.POST('TestLogin2',userInfo,'login to system');
    }

 }
