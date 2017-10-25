import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Product } from './models/product';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SalesApi {
    products = [
        Product.create({
            id: '1',
            name: 'Ice Creame'
        }),
        Product.create({
            id: '2',
            name: 'Parle G'
        }),
        Product.create({
            id: '3',
            name: 'iPhone20'
        })
    ];
    getAllProducts() {
        return of(this.products);
    }
}