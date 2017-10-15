import { PricingEffects } from './effects/product';
import { reducers } from './reducers/index';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { PriceDescriptionContainerComponent } from './containers/price-description.container.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PriceComponent } from './components/price.component';

@NgModule({
    declarations: [
        PriceComponent,
        PriceDescriptionContainerComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('prices',reducers),
    ],
    exports: [
        PriceDescriptionContainerComponent
    ]
})
export class PricingModule { }
