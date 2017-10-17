import { PricingState } from '../../modules/pricing/src/reducers/index';
import { Observable } from 'rxjs/Rx';
import { ElementRef, Output, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromRoot from 'app/reducers';
import * as items from '../../modules/items/src';
import * as pricing from '../../modules/pricing/src';

@Component(
    {
        selector: '<product-list-container></product-list-container>',
        template:
        `<div *ngIf="products$ | async">
            <div *ngFor="let product of products$ | async; trackBy:trackProduct">
              <display-item [id]="product.id"></display-item>
              <display-price [id]="product.id"></display-price>
            </div>
        </div>
        `
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)
export class ProductListContainerComponent {
    products$;
    constructor(private store: Store<fromRoot.State>) {
        this.products$ = store.select(fromRoot.getAllProducts);
        this.products$.subscribe(p => {
            console.log('products', p);
        })
    }

    trackProduct(index, product) {
        return (product) ? product.id : undefined;
    }
}