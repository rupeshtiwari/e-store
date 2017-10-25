import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as products from '../actions/product';
import { Product } from '../models/product';
import { SalesApi } from '../sales.api';

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}

@Injectable()
export class SalesEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromTypes.State>,
        private salesApi: SalesApi
    ) {
    }

    @Effect()
    loadProduct$ = this.actions$
        .ofType(fromTypes.NAVIGATE_PRODUCTS_PAGE)
        .map(toPayload)
        .switchMap(_ => {
            return this.salesApi.getAllProducts()
                .map((prods: Product[]) => new products.LoadProductsSuccess(prods))
                .catch((e) => of(new products.LoadProductsFail(e)));
        });

}