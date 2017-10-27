import { ShoppingCartContainerComponent } from './containers/shopping-cart.container.component';
import { ProductListContainerComponent } from './containers/product-list-container.component';

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