import { CartItem } from '../models/cart-item';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import * as fromCartItem from '../actions/cart-item';
import * as fromTypes from 'e-store-typings';
import { of } from 'rxjs/observable/of';
import { CartApi } from '../cart.api';

@Injectable()
export class CartItemEffects {
    constructor(
        private actions$: Actions,
        private cartApi: CartApi
    ) {
    }

    @Effect()
    addToCart = this.actions$
        .ofType(fromCartItem.ADD_TO_CART)
        .map(toPayload)
        .switchMap((cartItem: CartItem) => {
            return this.cartApi.addToCart(cartItem)
                .map(cartItem => new fromCartItem.AddToCartSuccess(
                    {
                        productId: cartItem.productId,
                        quantity: cartItem.quantity
                    }))
                .catch((e) => of(new fromCartItem.AddToCartFail(e)));
        });
}