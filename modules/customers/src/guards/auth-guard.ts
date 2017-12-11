import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as fromCustomers from '../reducers';
import { Observable } from 'rxjs/Observable';
import * as Auth from '../actions/user';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<fromCustomers.State>) {
    }

    canActivate(): Observable<boolean> {
        return this.store
            .select(fromCustomers.getLoggedIn)
            .map(authed => {
                if (!authed) {
                    this.store.dispatch(new Auth.LoginRedirect());
                    return false;
                }
                return true;
            })
            .take(1);
    }
}
