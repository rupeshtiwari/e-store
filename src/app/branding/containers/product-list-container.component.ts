import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { NAVIGATE_PRODUCTS_PAGE, ProductId } from 'e-store-typings';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
@Component(
    {
        selector: '<product-list-container></product-list-container>',
        templateUrl: './product-list-container.component.html'
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class ProductListContainerComponent implements OnInit {
    productIds$: Observable<ProductId[]>;
    constructor(private store: Store<fromTypes.State>) {
    }

    trackProduct(index, product) {
        return product;
    }

    public ngOnInit(): void {
        this.productIds$ = this.store.select(fromRoot.getAllProducts);
        this.store.dispatch({ type: NAVIGATE_PRODUCTS_PAGE });
    }
}