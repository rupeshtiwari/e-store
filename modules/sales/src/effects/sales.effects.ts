import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { CREATE_ORDER_SUCCESS, LOADING } from 'e-store-typings';
import { of } from 'rxjs/observable/of';

import {
    ADD_TO_CART,
    AddToCartFail,
    AddToCartSuccess,
    AddToCartSuccessPayload,
    CREATE_ORDER,
    CreateOrderPayload,
    CreateOrderSuccess,
    CreateOrderSuccessPayload,
} from '../actions/cart-item';
import * as products from '../actions/product';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { SalesApi } from '../sales.api';

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}

@Injectable()
export class SalesEffects {

    @Effect()
    loadProduct$ = this.actions$
        .ofType(fromTypes.NAVIGATE_PRODUCTS_PAGE)
        .map(toPayload)
        .switchMap(_ => {
            return this.salesApi.getAllProducts()
                .map((prods: Product[]) => new products.LoadProductsSuccess(prods))
                .catch((e) => of(new products.LoadProductsFail(e)));
        });

    @Effect()
    addToCart = this.actions$
        .ofType(ADD_TO_CART)
        .map(toPayload)
        .switchMap((cartItem: CartItem) => {
            return this.salesApi.addToCart(cartItem)
                .map(item => new AddToCartSuccess(new AddToCartSuccessPayload(cartItem)))
                .catch((e) => of(new AddToCartFail(e)));
        });

    @Effect()
    createOrder = this.actions$
        .ofType(CREATE_ORDER)
        .map(toPayload)
        .switchMap((payload: CreateOrderPayload) => {
            return this.salesApi.createOrder(payload.order)
                .map(order => new CreateOrderSuccess(new CreateOrderSuccessPayload(order)))
                .catch((e) => of(new AddToCartFail(e)));
        });

    @Effect()
    dispatchLoading$ = this.actions$
        .ofType(CREATE_ORDER)
        .map(_ => ({ type: LOADING, payload: true }));

    @Effect()
    dispatchLoadingDone$ = this.actions$
        .ofType(CREATE_ORDER_SUCCESS)
        .map(_ => ({ type: LOADING, payload: false }));

    constructor(
        private actions$: Actions,
        private store: Store<fromTypes.State>,
        private salesApi: SalesApi
    ) {
    }
}
