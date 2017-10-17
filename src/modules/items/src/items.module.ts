import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AddItemContainerComponent } from './containers/add-item-container.component';
import { DisplayItemContainerComponent } from './containers/display-item-container.component';
import { ItemsEffects } from './effects/product';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';

@NgModule({
    declarations: [
        AddItemContainerComponent,
        DisplayItemContainerComponent
    ],
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('items', reducers),
        EffectsModule.forFeature([ItemsEffects])
    ],
    exports: [
        AddItemContainerComponent,
        DisplayItemContainerComponent
    ]
})
export class ItemsModule { }
