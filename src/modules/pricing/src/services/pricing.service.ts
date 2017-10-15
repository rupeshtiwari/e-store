import { Product } from '../models/product';
import { of } from 'rxjs/observable/of';

export function getProductById(id) {
    return of( new Product(id,getRandomInt(2, 500)));
}

function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}
