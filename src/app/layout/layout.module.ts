import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesModule } from '../shared/services/services.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared';
import { AddProduct,AddUser,ViewProduct,AddToCart,CardPayment } from './components/modal-component';
import { ProductComponent } from './product-list/product.component';
//import { ProductService } from './services/product.service';
import { cartComponent } from './shopping-cart/cart.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        MaterialModule,
        ServicesModule,
        ImageCropperModule,
       
        
    ],
    declarations: [
        LayoutComponent, 
        SidebarComponent, 
        HeaderComponent ,
        ProductComponent,
        cartComponent,
        AddProduct,
        AddUser,
        ViewProduct,
        AddToCart,
        CardPayment
    ],
        entryComponents: [
            AddProduct,
            AddUser,
            ViewProduct,
            AddToCart,
            CardPayment
        ],
        providers:[
            //ProductService
        ] 
})
export class LayoutModule {}
