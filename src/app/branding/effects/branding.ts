import { CreateOrderSuccessPayload } from '../../../../modules/sales/src/actions/cart-item';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { of } from 'rxjs/observable/of';

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}

@Injectable()
export class BrandingEffects {
    @Effect({ dispatch: false })
    loadProduct$ = this.actions$
        .ofType(fromTypes.CREATE_ORDER_SUCCESS)
        .map(toPayload)
        .do(({ id: orderId }) => this.router.navigate(['/ordersubmit'], {
            queryParams: {
                orderid: orderId
            }
        }));

    constructor(
        private actions$: Actions,
        private store: Store<fromTypes.State>,
        private router: Router
    ) {
    }

}
