
import { ChangeDetectionStrategy, EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';

@Component({
    selector: 'es-user-icon',
    template:
    `
    <button mat-mini-fab (click)="onUserDetailClick($event)">
      <mat-icon>account_circle</mat-icon>
    </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIconContainerComponent implements OnInit {
    name$: Observable<string>;
    @Output()
    showUser = new EventEmitter<any>();

    constructor(private store: Store<fromRoot.CustomersState>) {
    }

    public ngOnInit(): void {
        this.name$ = this.store.select(fromRoot.getUserName);
    }
    onUserDetailClick(event: KeyboardEvent): void {
        event.preventDefault();
        this.showUser.emit();
    }
    onShowCartClick(event: KeyboardEvent): void {
        event.preventDefault();
    }
}
