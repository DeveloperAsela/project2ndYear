import { Component, Inject, ViewChild, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import alertify from 'alertify.js';
import * as _ from 'lodash';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../shared/services/http.service';

import { ProductService } from '../../../shared/services';
import { saveAs as importedSaveAs } from "file-saver";

@Component({
  selector: 'payment-panel',
  templateUrl: './card-payment.component.html',

})
export class CardPayment implements OnInit {
  closeResult: string;

  itemToRemove: string;

  key: any
  currentUserId: any
  searchKey;

  constructor(private httpService: HttpService,

    private modalService: NgbModal,
    public dialogRef: MatDialogRef<CardPayment>,
    @Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService, private router: Router) { }


  ngOnInit() {



    this.loadUser();
  }

  loadUser() {
    this.currentUserId = localStorage.getItem('userId')
    console.log(this.currentUserId)
    //user id is not in db, so used this.currentUserId=145
    //  let getLiccenseKey={
    //   UserId:this.currentUserId,
    //   Software: 'name24'
    //  }

    this.searchKey = { id: '145', Software: 'name24' };

  }

  close() {
    this.dialogRef.close({
      status: true,
      data: ""
    });
  }


  open(content) {
    this.getAPIKey('1');

    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.return();

    });
    this.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }


  }

  getAPIKey(item: string) {


    // this.httpService
    // .createService('http://localhost:16037/api/LicenceApi', this.searchKey)
    // .subscribe(
    //     result =>
    //     console.log(result),
    //     // this.keyDetails.key = result.key,
    //      //console.log('api key-'+result.key),
    //     error => console.log(error)
    // );  
    console.log(this.searchKey)
    this.productService.GETforAPIKey('id=' + this.searchKey.id
      + '&' + 'Software=' + this.searchKey.Software).subscribe(data => {
        console.log(data.key)
        this.key = data.key

      });


    this.itemToRemove = item;

  }


  YourConfirmEvent() {

    // send id of the file
    this.fileDownload('setup.exe');
    //    this.removeItem(this.itemToRemove);

  }


  fileDownload(item: any) {

    this.httpService.downloadFile(item).subscribe(blob => {
      importedSaveAs(blob, 'setup.exe');
    }
    )

  }

  return(){
    this.router.navigate(['/product']);
}

}

