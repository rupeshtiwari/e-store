import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as cartItem from '../actions/cart-item';
import { CartItem } from '../models/cart-item';
import * as fromRoot from '../reducers';

@Component({
    selector: 'es-proceed-to-checkout',
    template: `
        <button (click)="proceed($event)" mat-button mat-raised-button color="primary">Proceed To Checkout</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProceedToCheckoutContainerComponent implements OnInit {
    @Input()
    id: string;

    constructor(private store: Store<fromRoot.State>) {
    }
    proceed() {

    }
    public ngOnInit(): void {
    }

    addToCart(event: KeyboardEvent): void {
        this.store.dispatch(new cartItem.AddToCart(
            new CartItem(guid(), this.id, 1)
        ));
    }
}
export function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
