import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Auth from '../actions/user';
import { UserCredentials } from '../models/user-credentials';
import * as fromCustomers from '../reducers';

@Component({
    selector: 'es-login-form-container',
    template: `
    <es-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </es-login-form>
  `,
    styles: [],
})
export class LoginFormContainerComponent implements OnInit {
    pending$ = this.store.select(fromCustomers.getLoginPagePending);
    error$ = this.store.select(fromCustomers.getLoginPageError);

    constructor(private store: Store<fromCustomers.State>) { }

    ngOnInit() { }

    onSubmit($event: UserCredentials) {
        this.store.dispatch(new Auth.Login($event));
    }
}
