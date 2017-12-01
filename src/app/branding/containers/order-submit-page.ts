import { CartItem } from '../../../../modules/sales/src/models/cart-item';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { ProductId } from 'e-store-typings';

@Component(
    {
        selector: 'es-order-submit-page',
        template: 'Submit Order is in progress...'
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class OrderSubmitContainerComponent {

}
