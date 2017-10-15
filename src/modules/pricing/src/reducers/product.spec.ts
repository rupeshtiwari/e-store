import { reducer } from './product';
import { Add } from '../actions/product';
import { Product } from '../models/product';

describe('Pricing Reducers', () => {
    describe('ADD', () => {
        it(' can add new product', () => {
            const stateBefore = {
                ids: ['ice-cream-id'],
                entities: {
                    'ice-cream-id': new Product('ice-cream-id', '2')
                }
            };
            const stateAfter = {
                ids: ['ice-cream-id','parleg-id'],
                entities: {
                    'ice-cream-id': new Product('ice-cream-id', '2'),
                    'parleg-id': new Product('parleg-id', '3')
                }
            }
            const action = new Add(new Product('parleg-id','3'));
            const result = reducer(stateBefore, action);
            expect(result).toEqual(stateAfter);
        });
    });
});