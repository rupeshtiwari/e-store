import { ProductId } from 'e-store-typings';

export class CartItem {

    constructor(
        public id: string,
        public productId: ProductId,
        public quantity: number
    ) { }

}
