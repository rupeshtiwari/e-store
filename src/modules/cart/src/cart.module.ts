import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartApi } from './cart.api';
import { AddToCartContainerComponent } from './containers/add-to-cart.container.component';
import { CartIconContainerComponent } from './containers/cart-icon-container.component';
import { CartItemEffects } from './effects/cart-item';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';

export const COMPONENTS = [
    AddToCartContainerComponent,
    CartIconContainerComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('cart', reducers),
        EffectsModule.forFeature([CartItemEffects]),
    ],
    exports: COMPONENTS,
})
export class CartModule {
    static forRoot() {
        return {
            ngModule: CartModule,
            providers: [
                CartApi
            ]
        }
    }
}
