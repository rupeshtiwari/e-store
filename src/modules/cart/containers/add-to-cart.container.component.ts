import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../models/cart-item';
import * as fromCartItem from '../reducers';

@Component({
    selector: 'es-add-to-cart',
    template: `
        <button mat-button mat-raised-button color="primary"> Add To Cart </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToCartContainerComponent implements OnInit {
    @Input()
    id: string;

    constructor(private store: Store<fromCartItem.State>) {
    }

    public ngOnInit(): void {

    }
}