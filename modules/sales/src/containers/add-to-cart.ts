import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as cartItem from '../actions/cart-item';
import { CartItem } from '../models/cart-item';
import * as fromRoot from '../reducers';
import { LOADING } from 'e-store-typings';

@Component({
    selector: 'es-add-to-cart',
    template: `
        <button (click)="addToCart($event)" mat-button mat-raised-button color="primary"> Add To Cart </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToCartContainerComponent implements OnInit {
    @Input()
    id: string;

    constructor(private store: Store<fromRoot.State>) {
    }

    public ngOnInit(): void {
        this.store.select(fromRoot.isCartLoading).subscribe(loading => this.store.dispatch({ type: LOADING, payload: loading }));
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
