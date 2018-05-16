
import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Router } from '@angular/router';
import { alertify } from 'alertify.js';
import * as _ from 'lodash';

import { AddProduct,AddUser,ViewProduct,AddToCart } from '../components/modal-component';
//import { ProductService } from '../services/product.service';
import { ProductService } from '../../shared/services';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    animations: [routerTransition()]
})
export class ProductComponent implements OnInit {
    constructor(private router: Router,public dialog: MatDialog,private productService:ProductService) { }

    categoryList:any=[];
    viewAddPanel = false;
    imageUpload;
    image;
    imageUploadApiUrl = "http://localhost/api/public/api/uploadImage";

    types = ['Application', 'Operating Systems', 'Servers'];
    viewProductList:any=[];
    productList:any=[];

    productImage = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1p1qs?ver=eb94&q=90&m=6&h=423&w=752&b=%23FFFFFFFF&o=f&aim=true";
    ngOnInit() {
        this.getProduct();
        this.loadUser();
    }

    loadUser() {
        console.log('sssssssss', );
        if (localStorage.getItem('userRole') == 'Admin') {
            this.viewAddPanel = true;
        } else {
            this.viewAddPanel = false;
        }

    }
    
    setAll(){
      this.viewProductList=this.productList;
    }
    filterProject(category) {
      this.viewProductList = category;
    }
    openAddProductPanel() {
        let dialogRef = this.dialog.open(AddProduct, {
          width: '700px',
          data: {
            inventryItem: {}
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
      }
      openAddUserPanel() {
        let dialogRef = this.dialog.open(AddUser, {
          width: '600px',
          data: {
            inventryItem: {}
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.getProduct();
        });
      }
      openViewProductPanel(product) {
        let dialogRef = this.dialog.open(ViewProduct, {
          width: '600px',
          data: {
            product: product
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
      }
      openAddToCartPanel(product) {
        let dialogRef = this.dialog.open(ViewProduct, {
          width: '600px',
          data: {
            product: product
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
    
        });
      }
    //   addToCart(producr){

    //   }
    
    getProduct() {
        this.productService.getProducts().subscribe(data => {
             this.productList = data;
             this.viewProductList = data;
            this.categoryList = _.values(_.groupBy(data,'Type'))
        });

    }
    
    imageUploaded(file, imageUpload) {
        this.imageUpload = imageUpload;
        let fname: String = file.serverResponse._body;
        this.image = fname.replace(/['"]+/g, '');

    }
    imageRemoved(img) {


    }

    selectProduct(selectProduct) {
        // this.dialog.open(ProductDialogComponent, {
        //     data: { selectProduct: selectProduct },
        //     width: '500px'
        // });
        alertify.delay(1000);
        alertify.logPosition("bottom right");
        alertify.error("error");
        alertify.sucess("successfully");
    }

    addToCart(product) {
        
        let dialogRef = this.dialog.open(AddToCart, {
            width: '600px',
            data: {
              product: product
            }
          });
      
          dialogRef.afterClosed().subscribe(result => {
      
          });
        
        // product['qty'] = 1;
        // this.shoppingCartService.addCartItem(product).then(res => {
        //     console.log(res);
        // });
        // this.shoppingCartService.cartItem.push(product);
        // this.router.navigate(['/product/cart']);



    }
}
