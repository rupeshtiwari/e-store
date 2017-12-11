import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import { UserCredentials } from '../models/user-credentials';

@Injectable()
export class AuthService {
    constructor() { }

    login({ username, password }: UserCredentials) {
        /**
         * Simulate a failed login to display the error
         * message for the login form.
         */
        if (username !== 'test') {
            return _throw('Invalid username or password');
        }

        return of({ name: 'User' });
    }

    logout() {
        return of(true);
    }
}
