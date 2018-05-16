import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { ProductComponent } from './product-list/product.component';
import { cartComponent } from './shopping-cart/cart.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'product' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'product', component:ProductComponent },
            { path: 'cart', component:cartComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
