import { Store } from '@ngrx/store';
import { SalesState } from '../reducers/index';
import { Directive, EventEmitter, Output } from '@angular/core';
import { ProductId } from 'e-store-typings';
import * as fromRoot from '../reducers';

@Directive({
    selector: '[esProductIds]'
})
export class ProductIdsDirective {
    @Output() productIdsFound = new EventEmitter<ProductId>();
    constructor(private store: Store<SalesState>) {
        store.select(fromRoot.getAllProductIds).subscribe(this.emitIds.bind(this));
    }
    emitIds(ids) {
        this.productIdsFound.emit(ids);
    }
}

