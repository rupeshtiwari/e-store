import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { of } from 'rxjs/observable/of';

import * as prices from '../actions/price';
import { FinanceApi } from '../finance.api';
import { Price } from '../models/price';

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}

@Injectable()
export class FinanceEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromTypes.State>,
        private financeApi: FinanceApi
    ) {
    }

    @Effect()
    loadProduct$ = this.actions$
        .ofType(fromTypes.NAVIGATE_PRODUCTS_PAGE)
        .map(toPayload)
        .switchMap(_ => {
            return this.financeApi.getAllProducts()
                .map((prods: Price[]) => new prices.LoadPricesSuccess(prods))
                .catch((e) => of(new prices.LoadPricesFail(e)));
        });

}