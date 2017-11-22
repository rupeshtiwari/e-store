import { ShoppingCartContainerComponent } from './containers/shopping-cart-page';
import { ProductListContainerComponent } from './containers/product-list-page';

import { Routes } from '@angular/router';

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
];
