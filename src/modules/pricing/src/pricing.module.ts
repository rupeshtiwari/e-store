import { DisplayPriceContainerComponent } from './containers/display-price-container.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AddPriceContainerComponent } from './containers/add-price-container.component';
import { PricingEffects } from './effects/product';
import { reducers } from './reducers/index';


@NgModule({
    declarations: [
        AddPriceContainerComponent,
        DisplayPriceContainerComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('prices', reducers),
        EffectsModule.forFeature([PricingEffects])
    ],
    exports: [
        AddPriceContainerComponent,
        DisplayPriceContainerComponent
    ]
})
export class PricingModule { }
