import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'app/branding/containers/app.component';

import { FinanceModule } from '../../modules/finance/src/finance.module';
import { SalesModule } from '../../modules/sales/src/sales.module';
import { NotFoundPageComponent } from './containers/not-found-page';
import { EStoreMaterialModule } from './material.module';
import { ProductListContainerComponent } from './products/containers/product-list-container.component';


export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    ProductListContainerComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        EStoreMaterialModule,
        SalesModule.forRoot(),
        FinanceModule.forRoot(),
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class BrandingModule {
    static forRoot() {
        return {
            ngModule: BrandingModule,
            providers: [],
        };
    }
}
