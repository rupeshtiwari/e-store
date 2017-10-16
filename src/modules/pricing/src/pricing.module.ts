import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AddPriceComponent } from './components/add-price.component';
import { PriceComponent } from './components/price.component';
import { PriceDescriptionContainerComponent } from './containers/price-description.container.component';
import { reducers } from './reducers/index';

@NgModule({
    declarations: [
        PriceComponent,
        PriceDescriptionContainerComponent,
        AddPriceComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('prices',reducers),
    ],
    exports: [
        PriceDescriptionContainerComponent,
        AddPriceComponent
    ]
})
export class PricingModule { }
