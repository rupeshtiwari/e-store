import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { ProductId } from 'e-store-typings';
import { Observable } from 'rxjs/Observable';

@Component(
    {
        selector: 'es-shopping-cart-page',
        template:`coming soon`
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class ShoppingCartContainerComponent implements OnInit {
    constructor(private store: Store<fromTypes.State>) {
    }
    public ngOnInit(): void {
    }
}