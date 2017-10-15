import { getProductById } from '../services/pricing.service';
import { Product } from '../models/product';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import * as pricing from '../actions/product';
import * as items from '../../../items/src';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

export class PricingEffects {

    // @Effect()
    // findPrice$ = this.actions$
    //     .ofType(items.ADD)
    //     .map(toPayload)
    //     .switchMap(payload => {
    //         return getProductById(payload.id).map(product =>
    //             new pricing.Add(product)
    //         );
    //     });

    constructor(
        private actions$: Actions
    ) {

    }
}