import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'app/reducers';
import * as fromActions from '../actions/product';

@Component(
    {
        selector: '<add-product-container></add-product-container>',
        template:
        `
        <!--<add-product (onAddProduct)="onAddProduct($event)"></add-product>-->
        <add-product (onAddProduct)="onAddProduct($event)"></add-product>
        `
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)
export class AddProductContainerComponent {
    constructor(private store: Store<fromRoot.State>) {
    }

    onAddProduct(event) {
        this.store.dispatch(new fromActions.CreateProduct({ id: '' }));
    }
}