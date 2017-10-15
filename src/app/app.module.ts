import { ItemsModule } from '../modules/items/src/items.module';
import { ProductListContainerComponent } from './containers/product-list-container';
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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { PricingModule } from '../modules/pricing/src/pricing.module';
import { reducers } from '../modules/pricing/src/reducers/index';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product.component';
import { AddProductContainerComponent } from './containers/add-product-container';
import { metaReducers } from './reducers/index';

@NgModule({
  declarations: [
    AddProductComponent,
    AddProductContainerComponent,
    ProductListContainerComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PricingModule,
    ItemsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
