import { Routes } from '@angular/router';

import { OrderSubmitContainerComponent } from './containers/order-submit-page';
import { ProductListContainerComponent } from './containers/product-list-page';
import { ShoppingCartContainerComponent } from './containers/shopping-cart-page';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products',
        component: ProductListContainerComponent
    },
    {
        path: 'cart',
        component: ShoppingCartContainerComponent
    },
    {
        path: 'ordersubmit',
        component: OrderSubmitContainerComponent
    }
];
