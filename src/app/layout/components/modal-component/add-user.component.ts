import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import alertify from 'alertify.js';
import * as _ from 'lodash';

import { ProductService } from '../../../shared/services';;

@Component({
    selector: 'add-user',
    template: `
    <h2 mat-dialog-title>Add New User</h2>
<mat-dialog-content>
    <div class="col-md-12">
        <form #form="ngForm">
            <div class="row"></div>
            <div class="row">
                <div class="col-md-6">
                    <mat-form-field style="width:100%">
                        <input matInput name="Fname" placeholder="First Name" ngModel>
                    </mat-form-field>
                </div>
                <div class="col-md-6">
                    <mat-form-field style="width:100%">
                        <input matInput name="Lname" placeholder="Last Name" ngModel>
                    </mat-form-field>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <mat-form-field>
                        <mat-select name="R_ID" placeholder="Role" ngModel>
                            <mat-option *ngFor="let role of Roles" [value]="type">
                                {{ role }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="col-md-6">
                    <mat-form-field style="width:100%">
                        <input matInput name="Email" placeholder="Email" ngModel>
                    </mat-form-field>
                </div>
                <div class="col-md-6">
                    <mat-form-field style="width:100%">
                        <input matInput name="Password" type="password" placeholder="Password" ngModel>
                    </mat-form-field>
                </div>
                <div class="col-md-6">
                    <mat-form-field style="width:100%">
                        <input matInput name="confirmPassword" type="password" placeholder="Confirm Password" ngModel>
                    </mat-form-field>
                </div>
            </div>
            <div class="pull-right" style="margin-top:10px;margin-bottom;">
                <button mat-raised-button color="primary" (click)="addUser(form)">Save</button>
                <button mat-raised-button style="background-color:rgb(213, 247, 210);" (click)="close()">Cancel</button>
            </div>
        </form>
    </div>
</mat-dialog-content>

      `
  })
  export class AddUser implements OnInit {
   
    newValue;
    msg;
    constructor(
      public dialogRef: MatDialogRef<AddUser>,
      @Inject(MAT_DIALOG_DATA) public data: any, private productService:ProductService) { }
  
    ngOnInit() {
     
    }
    addUser(form){
        let user = form.value;
        user.R_ID = 1;
        this.productService.addNewUser(user).subscribe(res=>{
           //this.showMsg(res);
           this.close();
        });
    }
  
      close(): void {
        this.msg="Please Enter Value";
        this.dialogRef.close({
            status:false,
            data:""
        });
      }
  
      showMsg(msg, type?: String) {
        // alertify.delay(5000);
        // alertify.logPosition("top center");
        // if (type == "error")
        //   alertify.error(msg);
        // else
          // alertify.success(msg);
      }
  }
  