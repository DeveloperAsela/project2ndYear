import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import alertify from 'alertify.js';
import * as _ from 'lodash';
import { DOCUMENT } from '@angular/platform-browser';

import { ProductService } from '../../../shared/services';

@Component({
    selector: 'view-product',
    template: `
    <h2 mat-dialog-title>Add To Cart</h2>
    <mat-dialog-content>
        <div class="col-md-12">
            <form #form="ngForm">
                <div class="row"></div>
                <div class="row">
                    <div class="col-md-12">
                        <mat-form-field style="width:100%">
                            <input matInput name="productName" [readonly]="!isEdit" placeholder="Name" [(ngModel)]="selectedProduct.Name">
                        </mat-form-field>
                    </div>
                    <div class="col-md-12">
                        <mat-form-field style="width:100%">
                            <input matInput name="discription" [readonly]="!isEdit" placeholder="Discription" [(ngModel)]="selectedProduct.Discription">
                        </mat-form-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <mat-form-field>
                            <mat-select name="type" placeholder="Period"   [(ngModel)]="selectedPeriod">
                                <mat-option *ngFor="let period of periods" [value]="period" (click)="changePrice(period)">
                                    {{ period }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-md-6">
                       <h3>Price: {{selectedPrice}}</h3>
                    </div>
                </div>
                 <div class="pull-left" style="margin-top:10px;margin-bottom;">
                    <button mat-raised-button color="warn" (click)="getFreeTrial()">Free Trial</button>
                </div>
                <div class="pull-right" style="margin-top:10px;margin-bottom;">
                    <button mat-raised-button color="primary" (click)="addToCart()">Add</button>
                    <button mat-raised-button style="background-color:rgb(213, 247, 210);" (click)="close()">Cancel</button>
                </div>
            </form>
        </div>
    </mat-dialog-content>
    
      `
})
export class AddToCart implements OnInit {

    selectedProduct;
    periods = ["06 Month", "12 Month", "24 Month","LifeTime"];
    isEdit=false;
    selectedPeriod = this.periods[1];
    selectedPrice;
    periodInMonth=12;
    constructor(
        public dialogRef: MatDialogRef<AddToCart>,
        @Inject(MAT_DIALOG_DATA) public data: any,private productService:ProductService,private router:Router,@Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
        this.selectedProduct = this.data.product;
        //let type= this.selectedProduct.Type;
        // this.selectedProduct.Type=this.setType(type);
        console.log(this.selectedProduct);
        this.selectedPrice = this.selectedProduct.Price_in___for_12_months;
    }
addToCart(){
       let data = {};
       data['UserID'] = 1;//this.periodInMonth;
       data['P_ID'] = this.selectedProduct.P_ID;
       data['Validation_Period_in_months'] = this.periodInMonth;
        this.productService.addToCart(data).subscribe(res=>{
            //console.log(res);
           // if(res="New product added to your cart successfully"){
                this.router.navigate(['/cart']);
                this.close();
           // }
        });
}
changePrice(period){
    if(this.periods[0]==period){
        this.selectedPrice = this.selectedProduct.Price_in___for_6_months;
        this.periodInMonth = 6;
    }   
    else if(this.periods[1]==period){
        this.selectedPrice = this.selectedProduct.Price_in___for_12_months;
        this.periodInMonth = 12;
    }
    else if(this.periods[2]==period){
        this.selectedPrice = this.selectedProduct.Price_in___for_24_months;
        this.periodInMonth = 24;
    }
    else if(this.periods[3]==period){
        this.selectedPrice = this.selectedProduct.Price_in___for_lifetime;
        this.periodInMonth = 60;
    }
}
getFreeTrial(){
    this.document.location.href = 'https://google.com';//this.selectedProduct.freetralDownloadUrl;
}


    close(): void {
        this.dialogRef.close({
            status: false,
            data: ""
        });
    }
   

}
