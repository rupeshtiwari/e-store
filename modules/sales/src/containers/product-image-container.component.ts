import { environment } from '../../../../src/environments/environment';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';
import * as fromSales from '../reducers';

@Component({
    selector: 'es-product-image',
    template: `
    <img [src]="imageLink$|async" style="width:55px;height:60px" />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductImageContainerComponent implements OnInit {
    @Input()
    productId: string;
    imageLink$: Observable<string>;

    constructor(private store: Store<fromSales.State>) {
    }

    public ngOnInit(): void {
        this.imageLink$ = this.store.select(
            fromSales.getProductImageLinkById(this.productId))
            .map(s => `${environment.BASE_URL}${s}`);
    }
}