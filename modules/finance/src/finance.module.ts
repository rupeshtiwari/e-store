import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductPriceContainerComponent } from './containers/product-price-container.component';
import { FinanceEffects } from './effects/finance.effects';
import { FinanceApi } from './finance.api';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers';


export const COMPONENTS = [
    ProductPriceContainerComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('finance', reducers),
        EffectsModule.forFeature([FinanceEffects]),
    ],
    exports: COMPONENTS,

})
export class FinanceModule {
    static forRoot() {
        return {
            ngModule: FinanceModule,
            providers: [
                FinanceApi
            ]
        }
    }
}
