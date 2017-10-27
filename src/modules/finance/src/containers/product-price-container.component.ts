import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Price } from '../models/price';
import * as fromFinance from '../reducers';

@Component({
    selector: 'es-product-price',
    template: `
    <span>{{price$|async|currency:'USD':true}}</span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPriceContainerComponent implements OnInit {
    @Input()
    id: string;
    price$: Observable<string>;

    constructor(private store: Store<fromFinance.State>) {
    }

    public ngOnInit(): void {
        this.price$ = this.store.select(fromFinance.getProductPriceById(this.id));
    }

    trackProduct(index: number, price: Price): string {
        return price.id;
    }
}