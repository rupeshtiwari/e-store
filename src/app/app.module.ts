import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { ItemsModule } from '../modules/items/src/items.module';
import { PricingModule } from '../modules/pricing/src/pricing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product.component';
import { AddProductContainerComponent } from './containers/add-product-container.component';
import { AddProductHomeContainerComponent } from './containers/add-product-home-container.component';
import { ProductListContainerComponent } from './containers/product-list-container.component';
import { ProductEffects } from './effects/product';
import { metaReducers, reducers } from './reducers/index';

const routes = [
  {
    path: 'add',
    component: AddProductHomeContainerComponent
  } 
];
@NgModule({
  declarations: [
    AddProductComponent,
    AddProductContainerComponent,
    ProductListContainerComponent,
    AddProductHomeContainerComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PricingModule,
    ItemsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot([ProductEffects])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
