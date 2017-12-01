import { CartItem } from '../../../../modules/sales/src/models/cart-item';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { ProductId } from 'e-store-typings';

@Component(
    {
        selector: 'es-shopping-cart-page',
        templateUrl: './shopping-cart-page.html'
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class ShoppingCartContainerComponent implements OnInit {
    productIds: ProductId[];

    constructor(private store: Store<fromTypes.State>) {
    }

    public ngOnInit(): void {
    }

    public cartItemsFound(productIds: ProductId[]) {
        this.productIds = productIds;
    }

    trackProduct(index: number, productId: ProductId) {
        return productId;
    }
}
