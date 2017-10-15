import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';

@NgModule({
    declarations: [
       
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('items',reducers)
    ],
    exports: [
    ]
})
export class ItemsModule { }
