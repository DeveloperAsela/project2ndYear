import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MainApiService } from '.';

@Injectable()
export class SignupService {
  
    constructor(private mainApiService:MainApiService) { }

    signup(registrationData){
        return this.mainApiService.POST('People',registrationData,'');
    }

}
