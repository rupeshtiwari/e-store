import { CommonModule } from '@angular/common';
import 'hammerjs';
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
import { SalesModule } from '../modules/sales/src/sales.module';
import { AppComponent } from './app.component';
import { ProductListContainerComponent } from './containers/product-list-container.component';
import { ProductEffects } from './effects/product';
import { EStoreMaterialModule } from './material.module';
import { metaReducers, reducers } from './reducers/index';
import { routes } from './routes';


@NgModule({
  declarations: [
    ProductListContainerComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    EStoreMaterialModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    SalesModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
