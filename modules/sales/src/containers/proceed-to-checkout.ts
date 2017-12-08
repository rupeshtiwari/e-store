import { OrderItem } from '../models/order-item';
import { guid } from '../util';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { CreateOrder, CreateOrderPayload } from '../actions/cart-item';
import { CartItem } from '../models/cart-item';
import { Order } from '../models/order';
import * as fromRoot from '../reducers';

@Component({
    selector: 'es-proceed-to-checkout',
    template: `
        <button (click)="proceedToCheckout$.next($event)" mat-button mat-raised-button color="primary">Proceed To Checkout
        <i class="material-icons">&#xE037;</i>
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProceedToCheckoutContainerComponent implements OnInit, OnDestroy {
    @Input()
    id: string;
    cartItems$: Observable<CartItem[]>;
    proceedToCheckout$ = new Subject<KeyboardEvent>();
    subscription: Subscription;

    constructor(private store: Store<fromRoot.State>) {
    }

    proceed(cartItems: CartItem[], event: KeyboardEvent): void {
        event.stopPropagation();
        event.preventDefault();
        this.store.dispatch(this.createOrderAction(cartItems));
    }

    private createOrderAction(cartItems: CartItem[]) {
        return new CreateOrder(new CreateOrderPayload(
            new Order(
                guid(),
                'abc',
                cartItems.map(
                    (item: CartItem) => new OrderItem(
                        guid(),
                        item.productId,
                        item.quantity)),
                (new Date()).toString())
        ));
    }

    ngOnInit(): void {
        this.cartItems$ = this.store.select(fromRoot.getAllCartItems);
        this.subscription = this.proceedToCheckout$
            .withLatestFrom(this.cartItems$)
            .subscribe(([event, cartItems]) => this.proceed(cartItems, event));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
