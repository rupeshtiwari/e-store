import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PriceComponent } from './components/price.component';
import { AddPriceContainerComponent } from './containers/add-price-container.component';
import { DisplayPriceContainerComponent } from './containers/display-price-container.component';
import { PriceDescriptionContainerComponent } from './containers/price-description.container.component';
import { PricingEffects } from './effects/product';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';


@NgModule({
    declarations: [
        PriceComponent,
        PriceDescriptionContainerComponent,
        AddPriceContainerComponent,
        DisplayPriceContainerComponent
    ],
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('prices', reducers),
        EffectsModule.forFeature([PricingEffects])
    ],
    exports: [
        PriceDescriptionContainerComponent,
        AddPriceContainerComponent,
        DisplayPriceContainerComponent
    ]
})
export class PricingModule { }
