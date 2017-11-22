import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { NAVIGATE_PRODUCTS_PAGE } from 'e-store-typings';

@Component(
    {
        selector: 'es-product-list-container',
        templateUrl: './product-list-page.html'
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class ProductListContainerComponent implements OnInit {
    productIds;
    constructor(private store: Store<fromTypes.State>) {
    }

    trackProduct(index, product) {
        return product;
    }

    productIdsFound(ids): void {
        this.productIds = ids;
    }

    public ngOnInit(): void {
        this.store.dispatch({ type: NAVIGATE_PRODUCTS_PAGE });
    }
}
