import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as fromCartItem from '../actions/cart-item';
import { CartApi } from '../cart.api';
import { CartItem } from '../models/cart-item';

@Injectable()
export class CartItemEffects {
    @Effect()
    addToCart = this.actions$
        .ofType(fromCartItem.ADD_TO_CART)
        .map(toPayload)
        .switchMap((cartItem: CartItem) => {
            return this.cartApi.addToCart(cartItem)
                .map(item => new fromCartItem.AddToCartSuccess(item))
                .catch((e) => of(new fromCartItem.AddToCartFail(e)));
        });
    constructor(
        private actions$: Actions,
        private cartApi: CartApi
    ) {
    }
}
