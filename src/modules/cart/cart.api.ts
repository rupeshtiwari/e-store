import { CartItem } from './models/cart-item';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { ProductId } from "e-store-typings";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CartApi {
    addToCart(cartItem: CartItem) {
        const s = of(cartItem).timeout(3000);
        return s;
    }
}