import { SalesState } from '../reducers/index';
import { ChangeDetectionStrategy, EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as cartItem from '../actions/cart-item';
import { CartItem } from '../models/cart-item';
import * as fromRoot from '../reducers';

@Component({
    selector: 'es-cart-icon',
    template:
    `
    <button mat-icon-button color="accent" (click)="onShowCartClick($event)">
        <mat-icon>shopping cart</mat-icon>
        {{count$|async}}
    </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartIconContainerComponent implements OnInit {
    count$: Observable<number>;
    @Output()
    showCart: EventEmitter<any> = new EventEmitter<any>();
    constructor(private store: Store<SalesState>) {
    }

    public ngOnInit(): void {
        this.count$ = this.store.select(fromRoot.getTotalCount);
    }

    onShowCartClick(event: KeyboardEvent): void {
        event.preventDefault();
        this.showCart.emit();
    }
}
