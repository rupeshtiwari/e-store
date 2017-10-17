import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromPricing from '../reducers';

@Component({
    selector: '<display-price></display-price>',
    template: `
    <label>{{price$|async}}</label>
`
})
export class DisplayPriceContainerComponent implements OnInit, AfterViewInit {
    price$;
    @Input()
    id;
    constructor(private store: Store<fromPricing.State>) { }

    public ngAfterViewInit(): void {
    }

    public ngOnInit(): void {
        this.price$ = this.store.select(fromPricing.getPriceById(this.id));
    }
}