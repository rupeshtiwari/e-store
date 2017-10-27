import { CartModule } from '../../modules/cart/cart.module';
import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductListContainerComponent } from './containers/product-list-container.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'app/branding/containers/app.component';

import { FinanceModule } from '../../modules/finance/src/finance.module';
import { SalesModule } from '../../modules/sales/src/sales.module';
import { NotFoundPageComponent } from './containers/not-found-page';
import { LayoutComponent, SidenavComponent } from './layout/components';
import { EStoreMaterialModule } from './material.module';
import { NavItemComponent } from "app/branding/layout/components/nav-item";
import { ToolbarComponent } from "app/branding/layout/components/toolbar";

export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    ProductListContainerComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        EStoreMaterialModule,
        SalesModule.forRoot(),
        FinanceModule.forRoot(),
        CartModule.forRoot(),
        StoreModule.forFeature('branding', reducers),
        EffectsModule.forFeature([]),
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
