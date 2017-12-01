import * as cartItem from '../actions/cart-item';
import { AddToCartSuccessPayload } from '../actions/cart-item';
import { CartItem } from '../models/cart-item';
import { getCountByProductId } from './cart-item';
import * as fromCart from './cart-item';

describe('ADD_TO_CART_SUCCESS', () => {
    it('can add new cart item in state', () => {
        const productId = '1';
        const quantity = 1;
        const id = '1';
        const stateBefore: fromCart.State = {
            entities: []
            , loading: true
        };
        const stateAfter = {
            entities: [
                new CartItem('1', '1', 1)
            ]
            , loading: false
        };
        const action = new cartItem.AddToCartSuccess(new AddToCartSuccessPayload(new CartItem(id, productId, quantity)));
        const result = fromCart.reducer(stateBefore, action);
        compareToEqual(result, stateAfter);
    });

    it('can update existing cart item in state', () => {
        const productId = '1';
        const quantity = 1;
        const id = '1';
        const stateBefore: fromCart.State = {
            entities: [
                new CartItem('1', '1', 1)
            ]
            , loading: true
        };
        const stateAfter = {
            entities: [
                new CartItem('1', '1', 2)
            ]
            , loading: false
        };
        const action = new cartItem.AddToCartSuccess(new AddToCartSuccessPayload(new CartItem(id, productId, quantity)));
        const result = fromCart.reducer(stateBefore, action);
        compareToEqual(result, stateAfter);
    });

    it('getCountByProductId', () => {
        const state = {
            entities: [
                new CartItem('1', '1', 2),
                new CartItem('2', '2', 4)
            ]
            , loading: false
        };

        function assert(productId, expectedQuantity) {
            const result = getCountByProductId(productId)(state);
            expect(result).toBe(expectedQuantity);
        }

        assert('2', 4);
        assert('1', 2);
    });
});

function compareToEqual(result, expected) {
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
}
