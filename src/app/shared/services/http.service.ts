
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams, ResponseContentType  } from '@angular/http';


// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpService {

    private headers:Headers = new Headers();

    options: RequestOptions;

    constructor(private http:Http) {
        this.configHeaders();

        this.headers = new Headers({ 'Content-Type': 'application/json', 
        'Accept': 'q=0.8;application/json;q=0.9' });
this.options = new RequestOptions({ headers: this.headers });

    }

    get(url) {
        return this.http.get(url, {headers: this.headers});
    }

    post(url, data?) {
        return this.http.post(url, data, {headers: this.headers});
    }

    put(url, data?) {
        return this.http.put(url, data, {headers: this.headers});
    }

    delete(url, data?) {
        return this.http.delete(url, data);
    }

    private configHeaders() {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Cache-Control", "no-cache");
        this.headers.append("Pragma", "no-cache");
    }

    errorHandler = (err) => {
        console.log(err);
    };



    createService(url: string, param: any): Observable<any> {
        let body = JSON.stringify(param);
        return this.http
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
        }   
    
        private extractData(res: Response) {
            let body = res.json();
            return body || {};
        }
    
        private handleError(error: any) {
            let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg);
            return Observable.throw(errMsg);
        }


        downloadFile(id): Observable<Blob> {
            let options = new RequestOptions({responseType: ResponseContentType.Blob });
            return this.http.get('assets' + '/' + id, options)
                .map(res => res.blob())
                .catch(this.handleError)
        }

}