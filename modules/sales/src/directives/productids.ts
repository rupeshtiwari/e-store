import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductId } from 'e-store-typings';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers';
import { SalesState } from '../reducers/index';

@Directive({
    selector: '[esProductIds]'
})
export class ProductIdsDirective implements OnDestroy, OnInit {
    @Output() productIdsFound = new EventEmitter<ProductId>();

    subscription: Subscription;

    constructor(private store: Store<SalesState>) {

    }

    emitIds(ids) {
        this.productIdsFound.emit(ids);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public ngOnInit(): void {
        this.subscription = this.store.select(fromRoot.getAllProductIds).subscribe(this.emitIds.bind(this));
    }
}

