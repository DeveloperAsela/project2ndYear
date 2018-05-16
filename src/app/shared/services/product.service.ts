import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MainApiService } from '.';


@Injectable()

export class ProductService {
    cartItem:any=[1,2,3,4];
    constructor(private mainApiService:MainApiService) {}

    addNewUser(user) {
        return this.mainApiService.POST('People',user,'');
    }
    getProducts(){
        return this.mainApiService.GET('Products','');
    }
    getProductByType(type){
        return this.mainApiService.GET(`getProductByType?type=${type}`,'');
    }

    addProducts(product) {
        return this.mainApiService.POST('Products',product,'');
    }

    editProducts(product){
        return this.mainApiService.POST('Products/x',product,'');
    }
    addToCart(product){
        return this.mainApiService.POST('cart',product,'');
    }
    getCartItem(){
        return this.mainApiService.GET('Products','');
    }
    deleteFromCart(data){
        return this.mainApiService.POST('Products/x',data,'');
    }

    deleteProducts(id: number) {
        // const headers = new Headers({ 'Content-Type': 'application/json' });
        // const options = new RequestOptions({ headers: headers });
        // return this.http.delete('http://localhost:18033/api/products/' + id, options)
        //     .map(result => result)
        //     .catch(this.handleError);
    }
    loadCartItem() {
        return this.mainApiService.GET('getCartItem','');
    }

    addCartItem(product) {
        return this.mainApiService.POST('addCartItem',product,'');
    }

    removeCartItem(itemId) {
        return this.mainApiService.POST('removeCartItem',itemId,'');
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    GETforAPIKey(parm) {
        return this.mainApiService.GETforAPIKey(parm,'');
    }
    

}