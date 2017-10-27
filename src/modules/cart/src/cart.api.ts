import 'rxjs/operator/delay';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CartItem } from './models/cart-item';

@Injectable()
export class CartApi {
    cartItemRepository = new Subject<CartItem>();
    addToCart(cartItem: CartItem) {
        setTimeout(() => this.cartItemRepository.next(cartItem), 500);
        return this.cartItemRepository;
    }
}