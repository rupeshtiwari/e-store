import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { Price } from './models/price';

@Injectable()
export class FinanceApi {
    products = [
        Price.create({
            id: '1',
            productId: '1',
            price: '3'
        }),
        Price.create({
            id: '2',
            productId: '2',
            price: '2'
        }),
        Price.create({
            id: '3',
            productId: '3',
            price: '600'
        })
    ];
    getAllProducts() {
        return of(this.products);
    }
}