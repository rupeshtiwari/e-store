import { Routes } from '@angular/router';

import { ProductListContainerComponent } from './containers/product-list-container.component';

export const routes: Routes = [
   // { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products',
        component: ProductListContainerComponent
    },
];