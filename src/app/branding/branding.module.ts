import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'app/branding/containers/app';
import { NavItemComponent } from 'app/branding/layout/components/nav-item';
import { ToolbarComponent } from 'app/branding/layout/components/toolbar';

import { FinanceModule } from '../../../modules/finance/src/finance.module';
import { SalesModule } from '../../../modules/sales/src/sales.module';
import { NotFoundPageComponent } from './containers/not-found-page';
import { OrderSubmitContainerComponent } from './containers/order-submit-page';
import { ProductListContainerComponent } from './containers/product-list-page';
import { ShoppingCartContainerComponent } from './containers/shopping-cart-page';
import { BrandingEffects } from './effects/branding';
import { LayoutComponent, SidenavComponent } from './layout/components';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';

export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    ProductListContainerComponent,
    ShoppingCartContainerComponent,
    OrderSubmitContainerComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        EStoreMaterialModule,
        SalesModule.forRoot(),
        FinanceModule.forRoot(),
        StoreModule.forFeature('branding', reducers),
        EffectsModule.forFeature([BrandingEffects]),
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
