import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';

@Component({
    selector: 'es-user-details',
    template: `
       Name:  {{name$|async}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailContainerComponent implements OnInit {
    name$: Observable<string>;
    constructor(private store: Store<fromRoot.State>) {

    }

    ngOnInit(): void {
        this.name$ = this.store.select(fromRoot.getUserName);
    }
}

