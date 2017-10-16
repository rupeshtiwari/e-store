import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as product from 'app/actions/product';
import { Product } from 'modules/items/src';
import { of } from 'rxjs/observable/of';

import * as addForm from '../actions/add-product-form';
import * as items from '../actions/product';
import * as fromItems from '../reducers';

@Injectable()
export class ItemsEffects {

    @Effect()
    createNewProductId$ = this.actions$
        .ofType<product.CreateProductId>(product.CREATE_PRODUCT_ID)
        .map(toPayload)
        .map(payload => new addForm.CreateNewProductId({ id: payload.id }));

    @Effect()
    createNewProduct$ = this.actions$
        .ofType<product.CreateProduct>(product.CREATE_PRODUCT)
        .map(toPayload)
        .withLatestFrom(this.store)
        .switchMap(v => {
            const state = v[1];
            const payload = v[0];
            return of(new items.CreateProduct(fromItems.getProductFromAddForm(state)));
        });
    constructor(
        private actions$: Actions,
        private store: Store<fromItems.State>
    ) {

    }
}