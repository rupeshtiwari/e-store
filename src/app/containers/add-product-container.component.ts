import { ElementRef, Output, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromRoot from 'app/reducers';
import * as items from '../../modules/items/src';
import * as pricing from '../../modules/pricing/src';

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
        this.store.dispatch(new items.Add(new items.Product(event.id, event.name)));
        this.store.dispatch(new pricing.Add(new pricing.Product(event.id, event.price)));
    }
}