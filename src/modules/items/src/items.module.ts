import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './effects/product';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AddItemContainerComponent } from './containers/add-item-container.component';
import { reducers } from './reducers/index';

@NgModule({
    declarations: [
        AddItemContainerComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('items', reducers),
        EffectsModule.forFeature([ItemsEffects])
    ],
    exports: [
        AddItemContainerComponent
    ]
})
export class ItemsModule { }
