import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';
import * as fromSales from '../reducers';

@Component({
    selector: 'es-product-name',
    template: `
    <span>{{name$|async}}</span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductNameContainerComponent implements OnInit {
    @Input()
    id: string;
    name$: Observable<string>;

    constructor(private store: Store<fromTypes.State>) {
    }

    public ngOnInit(): void {
        this.name$ = this.store.select(fromSales.getProductNameById(this.id));
    }

    trackProduct(index: number, product: Product): string {
        return product.id;
    }
}