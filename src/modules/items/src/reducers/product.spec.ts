import { reducer } from './product';
import { CreateProduct } from '../actions/product';
import { Product } from '../models/product';

describe('Products Reducers', () => {
    describe('ADD', () => {
        it(' can add new product', () => {
            const stateBefore = {
                ids: ['ice-cream-id'],
                entities: {
                    'ice-cream-id': new Product('ice-cream-id', 'Ice Cream')
                }
            };
            const stateAfter = {
                ids: ['ice-cream-id','parleg-id'],
                entities: {
                    'ice-cream-id': new Product('ice-cream-id', 'Ice Cream'),
                    'parleg-id': new Product('parleg-id', 'Parle G')
                }
            }
            const action = new CreateProduct(new Product('parleg-id','Parle G'));
            const result = reducer(stateBefore, action);
            expect(result).toEqual(stateAfter);
        });
    });
});