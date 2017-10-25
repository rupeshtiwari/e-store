import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CreateOrderContainerComponent } from './containers/create-order-container.component';
import { ProductNameContainerComponent } from './containers/product-name-container.component';
import { SalesEffects } from './effects/sales.effects';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers';
import { SalesApi } from './sales.api';

@NgModule({
    declarations: [
        CreateOrderContainerComponent,
        ProductNameContainerComponent
    ],
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('sales', reducers),
        EffectsModule.forFeature([SalesEffects]),
    ],
    exports: [
        CreateOrderContainerComponent,
        ProductNameContainerComponent
    ],
    providers: [
        SalesApi
    ]
})
export class SalesModule { }
