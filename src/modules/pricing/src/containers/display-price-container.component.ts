import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as fromPricing from '../reducers';

@Component({
    selector: '<display-price></display-price>',
    template: `<price [price]="price$|async"></price>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPriceContainerComponent implements AfterViewInit, OnInit {
    @Input()
    id;
    price$: Observable<string>;
    constructor(private store: Store<fromPricing.State>) {

    }

    public ngAfterViewInit(): void {

    }

    public ngOnInit(): void {
        this.price$ = this.store.select(fromPricing.getPriceById(this.id));
    }
}