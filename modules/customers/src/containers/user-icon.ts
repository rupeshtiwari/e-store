
import { ChangeDetectionStrategy, EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';

@Component({
    selector: 'es-user-icon',
    template:
    `
    <button mat-mini-fab>
      <mat-icon>account_circle</mat-icon>
    </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIconContainerComponent implements OnInit {
    name$: Observable<string>;
    constructor(private store: Store<fromRoot.CustomersState>) {
    }

    public ngOnInit(): void {
        this.name$ = this.store.select(fromRoot.getUserName);
    }

    onShowCartClick(event: KeyboardEvent): void {
        event.preventDefault();

    }
}
