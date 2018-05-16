import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import alertify from 'alertify.js';
import * as _ from 'lodash';

import { ProductService } from '../../../shared/services';

@Component({
    selector: 'add-product',
    template: `
    <h2 mat-dialog-title>Add New Product</h2>
    <mat-dialog-content>
        <div class="col-md-12">
            <form #form="ngForm">
                <div class="row"></div>
                <div class="row">
                    <div class="col-md-12">
                        <mat-form-field style="width:100%">
                            <input matInput name="Name" placeholder="Name" ngModel>
                        </mat-form-field>
                    </div>
                    <div class="col-md-12">
                        <mat-form-field style="width:100%">
                            <input matInput name="Discription" placeholder="Discription" ngModel>
                        </mat-form-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <mat-form-field>
                            <mat-select name="Type" placeholder="Type" ngModel>
                                <mat-option *ngFor="let type of types" [value]="type">
                                    {{ type }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-md-6">
                        <mat-form-field style="width:100%">
                            <input matInput name="Price_in__" placeholder="Price" ngModel>
                        </mat-form-field>
                    </div>
                    <div class="col-md-6">
                        <mat-form-field style="width:100%">
                            <input matInput name="period" placeholder="Period" ngModel>
                        </mat-form-field>
                    </div>
                    <div class="col-md-12">
                    <input type="file" (change)="fileChangeEvent($event)" />
    <div class="row">
        <div class="col-md-6">
                <image-cropper 
                [imageChangedEvent]="imageChangedEvent"
                [maintainAspectRatio]="true"
                [aspectRatio]="3 / 2"
                [resizeToWidth]="250"
                format="png"
                (imageCropped)="imageCropped($event)"
                (imageLoaded)="imageLoaded()"
                (loadImageFailed)="loadImageFailed()"
            ></image-cropper>
        </div>
        <div class="col-md-6">
                <img [src]="croppedImage" />
        </div>
    
    </div>
                    </div>
                </div>
                <div class="pull-right" style="margin-top:10px;margin-bottom;">
                    <button mat-raised-button color="primary" (click)="save(form)">Save</button>
                    <button mat-raised-button style="background-color:rgb(213, 247, 210);" (click)="close()">Cancel</button>
                </div>
            </form>
        </div>
    </mat-dialog-content>
    
      `
  })
  export class AddProduct implements OnInit {
   
    imageChangedEvent: any = '';
    croppedImage: any = '';
    types = ["Virus Guard", "OS", "Player"];
    constructor(
      public dialogRef: MatDialogRef<AddProduct>,
      @Inject(MAT_DIALOG_DATA) public data: any,private productService:ProductService) { }
  
    ngOnInit() {
     
    }
  
    save(form): void {
        let data = form.value;
        data['image'] = this.croppedImage;
       this.productService.addProducts(data).subscribe(res=>{
           console.log(res);
           form.reset();
            this.croppedImage = '';
            this.imageChangedEvent = '';
       });
      }
    //   submit(form){
    //     let data = form.value;
    //     data['image'] = this.croppedImage;
    //     this.tourService.submitNewHotel(data).subscribe(res=>{
    //       if(res=="okkkk"){
    //         form.reset();
    //         this.croppedImage = '';
    //         this.imageChangedEvent = '';
    //       }
    //     });
    //   }

      fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.croppedImage = image;
    }
    imageLoaded() {
      //  alert('success');
    }
    loadImageFailed() {
      //  alert('failed');
    }
      close(): void {
       
        this.dialogRef.close({
            status:false,
            data:""
        });
      }
  
  
  }
  