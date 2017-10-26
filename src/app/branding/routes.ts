import { ProductListContainerComponent } from './products/containers/product-list-container.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products',
        component: ProductListContainerComponent
    },
];