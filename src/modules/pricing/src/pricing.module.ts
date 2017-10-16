import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PriceComponent } from './components/price.component';
import { AddPriceContainerComponent } from './containers/add-price-container.component';
import { PriceDescriptionContainerComponent } from './containers/price-description.container.component';
import { PricingEffects } from './effects/product';
import { reducers } from './reducers/index';


@NgModule({
    declarations: [
        PriceComponent,
        PriceDescriptionContainerComponent,
        AddPriceContainerComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('prices',reducers),
        EffectsModule.forFeature([PricingEffects])
    ],
    exports: [
        PriceDescriptionContainerComponent,
        AddPriceContainerComponent
    ]
})
export class PricingModule { }
