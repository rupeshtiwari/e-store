import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';

@Component(
    {
        selector: 'es-shopping-cart-page',
        templateUrl: './shopping-cart.container.component.html'
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class ShoppingCartContainerComponent implements OnInit {
    products$: Observable<any>;
    constructor(private store: Store<fromTypes.State>) {
    }
    public ngOnInit(): void {
        this.products$ = this.store.select(fromRoot.getAllCartItems);
        this.products$.subscribe(s => console.log(s));
    }
    trackProduct(index, product) {
        return product.id;
    }
}
