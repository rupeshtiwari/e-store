import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Product } from './models/product';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SalesApi {
    products = [
        Product.create({
            id: '1',
            name: 'Ice Creame',
            imageLink: '/assets/images/icecream.jpg'
        }),
        Product.create({
            id: '2',
            name: 'Parle G',
            imageLink: '/assets/images/parleg.jpg'
        }),
        Product.create({
            id: '3',
            name: 'iPhone',
            imageLink: '/assets/images/iphone.jpg'
        })
    ];
    getAllProducts() {
        return of(this.products);
    }
}