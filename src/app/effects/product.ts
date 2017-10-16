import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import * as fromRoot from 'app/reducers';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Rx';

import { State } from '../reducers/index';

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private store: Store<fromRoot.State>) { }

    @Effect()
    navigateToAdd$ = this.handleNavigation('add', (r: ActivatedRouteSnapshot, state: fromRoot.State) => {
        console.log('add', state);
        return empty();
    });

    private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
        const nav = this.actions$.ofType(ROUTER_NAVIGATION).
            map(firstSegment).
            filter(s =>(s) && s.routeConfig.path === segment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return of();
        });
    }
}
