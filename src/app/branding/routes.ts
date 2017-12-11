import { LoginPageContainerComponent } from './containers/login-page';
import { AuthGuard } from '../../../modules/customers/src/guards/auth-guard';
import { UserDetailContainerComponent } from '../../../modules/customers/src/containers/user-detail';
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
        path: 'user',
        canActivate: [AuthGuard],
        component: UserDetailContainerComponent
    },
    {
        path: 'login',
        component: LoginPageContainerComponent
    },
    {
        path: 'ordersubmit',
        component: OrderSubmitContainerComponent
    }
];
