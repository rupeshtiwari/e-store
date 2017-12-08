import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserIconContainerComponent } from './containers/user-icon';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';


export const COMPONENTS = [
    UserIconContainerComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        EStoreMaterialModule,
        StoreModule.forFeature('customers', reducers),
        EffectsModule.forFeature([]),
    ],
    exports: COMPONENTS,

})
export class CustomersModule {
    static forRoot() {
        return {
            ngModule: CustomersModule,
            providers: [

            ]
        };
    }
}
