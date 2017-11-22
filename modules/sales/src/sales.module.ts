import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartApi } from './cart.api';
import { AddToCartContainerComponent } from './containers/add-to-cart';
import { CartIconContainerComponent } from './containers/cart-icon';
import { CreateOrderContainerComponent } from './containers/create-order';
import { ProceedToCheckoutContainerComponent } from './containers/proceed-to-checkout';
import { ProductImageContainerComponent } from './containers/product-image';
import { ProductNameContainerComponent } from './containers/product-name';
import { ProductQuantityContainerComponent } from './containers/product-quantity';
import { CartItemsDirective } from './directives/cart-items';
import { ProductIdsDirective } from './directives/productids';
import { CartItemEffects } from './effects/cart-item';
import { SalesEffects } from './effects/sales.effects';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers';
import { SalesApi } from './sales.api';

export const COMPONENTS = [
    CreateOrderContainerComponent,
    ProductNameContainerComponent,
    ProductImageContainerComponent,
    ProceedToCheckoutContainerComponent,
    ProductIdsDirective,
    AddToCartContainerComponent,
    CartIconContainerComponent,
    ProductQuantityContainerComponent,
    CartItemsDirective,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('sales', reducers),
        EffectsModule.forFeature([SalesEffects, CartItemEffects]),
    ],
    exports: COMPONENTS,

})
export class SalesModule {
    static forRoot() {
        return {
            ngModule: SalesModule,
            providers: [
                SalesApi,
                CartApi
            ]
        };
    }
}
