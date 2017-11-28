import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductId } from 'e-store-typings';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers';

@Directive({
    selector: '[esInCartItems]'
})
export class CartItemsDirective implements OnDestroy, OnInit {
    @Output() cartItemsFound = new EventEmitter<ProductId[]>();

    subscription: Subscription;

    constructor(private store: Store<fromRoot.State>) {
    }

    emitIds(productIds: ProductId[]) {
        this.cartItemsFound.emit(productIds);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public ngOnInit(): void {
        this.subscription = this.store.select(fromRoot.getCartProductIds).subscribe(this.emitIds.bind(this));
    }
}

