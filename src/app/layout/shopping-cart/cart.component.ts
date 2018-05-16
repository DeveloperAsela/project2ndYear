import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../../shared/services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CardPayment } from '../components/modal-component';
import { Router } from '@angular/router';
@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],

})
export class cartComponent implements OnInit {
    products: any = [];
    cartItems:any=[{
        pId:1,
        name:'',
        type:'',
        version:0,
        price:800,
        qty:1,
        paid:1,
        productImage: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1p1qs?ver=eb94&q=90&m=6&h=423&w=752&b=%23FFFFFFFF&o=f&aim=true"
    }];
    total = 0;
    totalQty = 0;
    removeBtn ="Remove";
    isCheckout=false;
    constructor(private shoppingCartService: ProductService,public dialog: MatDialog,private router:Router) { }


    ngOnInit() {
        this.getCartItem();
        this.calSum();
        this.calQty();
    }
    remove(product,i) {
        this.products.splice(i, 1);
        this.shoppingCartService.removeCartItem({
            id:product.cartItemId
        }).subscribe(res=>{
            console.log(res);
        });
        this.calSum();
    }
    setRowPrice(item){
        return parseFloat(item.price) * parseFloat(item.qty);
    }
    getCartItem() {
        this.shoppingCartService.getCartItem().subscribe(data => {
          //  console.log(data);
         //    this.cartItems = data;
        });
    }
    deleteCartItem(item,i){
        this.cartItems.splice(i,1);
    }
    calSum() {
        this.total = 0;
        for (let a = 0; a < this.cartItems.length; a++) {
            let product = this.cartItems[a];
            this.total += parseFloat(product.price)*parseFloat(product.qty);
        }
    }
    calQty() {
        this.totalQty = 0;
        for (let a = 0; a < this.cartItems.length; a++) {
            let product = this.cartItems[a];
            this.totalQty += parseFloat(product.qty);
        }
    }
    changeQty(event,item){
       // console.log('ll',event.target.value);
        this.setRowPrice(item);
        this.calSum();
        this.calQty();
    }
    checkout(){
        
        let dialogRef = this.dialog.open(CardPayment, {
            width: '600px',
            data: {
              product: ""
            }
          });
      
          dialogRef.afterClosed().subscribe(result => {
      
        
          });
        this.removeBtn = "Download";
        this.isCheckout = true;

        
       

    }
    addItems(){
        this.router.navigate(['/product']);
    }
    getTotal(value, qtty) {
        //let qtty =2+'';
        console.log(value, qtty);
        return parseFloat(value) * parseFloat(qtty);
    }

}
