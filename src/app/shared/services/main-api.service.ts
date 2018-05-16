import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';




@Injectable()
export class MainApiService implements OnInit{
    private apiUrl = 'http://quadroudari.azurewebsites.net/api';  // URL to local api
    
    private httpOptions = {
        headers:null
    };
    loggedUser;
    constructor(
        private http: HttpClient,
        //private config: Config,
    ) { 
        this.setHeaders();
    }
    ngOnInit(){
       

    }

    setHeaders(){
        let requestHeaders = new HttpHeaders();
        requestHeaders.append('Content-Type', 'application/json');
        this.httpOptions.headers = requestHeaders;
    } 

    GET(requestUrl: string, requestDesc: string): Observable<any> {

        return this.http.get(this.apiUrl + '/' + requestUrl,this.httpOptions)
            .pipe(
            tap(result => {
                console.log(result);
            }),
            catchError(this.handleError(requestDesc, []))
            );
    }
    POST(requestUrl: string,requestBody,requestDesc: string):Observable<any>{

        return this.http.post(this.apiUrl+'/'+requestUrl,requestBody,this.httpOptions)
                .pipe(
                    tap(result =>{ 
                    console.log('RESULT->',result);
                }),
                    catchError(this.handleError(requestDesc,[]))
                );

    }


    // POSTforAPIKey(requestUrl: string,requestBody,requestDesc: string):Observable<any>{

    //     return this.http.post('http://localhost:16037/api'+'/'+requestUrl,requestBody,this.httpOptions)
    //             .pipe(
    //                 tap(result =>{ 
    //                 console.log('RESULT->',result);
    //             }),
    //                 catchError(this.handleError(requestDesc,[]))
    //             );

    // }

       GETforAPIKey(requestUrl: string, requestDesc: string): Observable<any> {

        return this.http.get('http://localhost:16037/api/LicenceApi' + '?' + requestUrl,this.httpOptions)
            .pipe(
            tap(result => {
                console.log(result);
            }),
            catchError(this.handleError(requestDesc, []))
            );
    }

    DELETE(){

    }
    PUT(){

    }    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }

    
    getFormattedDate(myDatePickerObject: any): string {
        return myDatePickerObject.year + '-' + myDatePickerObject.month + '-' + myDatePickerObject.day;
    }
}