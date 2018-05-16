import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import alertify from 'alertify.js';
import * as _ from 'lodash';

import { ProductService } from '../../../shared/services';

@Component({
    selector: 'view-product',
    template: `
    <h2 mat-dialog-title>Product Information</h2>
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
                    <div class="col-md-12">
                        <mat-form-field>
                            <mat-select name="type" placeholder="Type"  [disabled]="!isEdit" [(ngModel)]="selectedProduct.Type">
                                <mat-option *ngFor="let type of types" [value]="type">
                                    {{ type }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-md-6">
                        <mat-form-field style="width:100%">
                            <input matInput name="price" placeholder="Price" [readonly]="!isEdit" [(ngModel)]="selectedProduct.Price_in__" >
                        </mat-form-field>
                    </div>
                    <div class="col-md-6">
                        <mat-form-field style="width:100%">
                            <input matInput name="period" placeholder="Period" [readonly]="!isEdit" >
                        </mat-form-field>
                    </div>
                </div>
                <div class="pull-right" style="margin-top:10px;margin-bottom;">
                    <button mat-raised-button color="primary" (click)="edit()">{{isEdit?'Save':'Edit'}}</button>
                    <button mat-raised-button style="background-color:rgb(213, 247, 210);" (click)="close()">Cancel</button>
                </div>
            </form>
        </div>
    </mat-dialog-content>
    
      `
})
export class ViewProduct implements OnInit {

    selectedProduct;
    types = ["Virus Guard", "", ""];
    isEdit=false;
    constructor(
        public dialogRef: MatDialogRef<ViewProduct>,
        @Inject(MAT_DIALOG_DATA) public data: any,private productService:ProductService) { }

    ngOnInit() {
        this.selectedProduct = this.data.product;
        //let type= this.selectedProduct.Type;
        // this.selectedProduct.Type=this.setType(type);
        console.log(this.selectedProduct);
    }
edit(){
    if(this.isEdit){
        this.productService.editProducts(this.selectedProduct).subscribe(res=>{
            console.log(res);
        });
    }
    this.isEdit = !this.isEdit;
}

    close(): void {
        this.dialogRef.close({
            status: false,
            data: ""
        });
    }
    //   setType(type){
    // let typeDesc="";
    // if(type==1){

    // }
    // else if(type==1){

    // }
    // else if(type==1){

    // }
    //       return typeDesc;
    //   }

}
