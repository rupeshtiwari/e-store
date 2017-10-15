import { Observable, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as fromPricing from '../reducers';

@Component({
    selector: '<price-description></price-description>',
    template: `<price [price]="price$|async"></price>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceDescriptionContainerComponent {
    @Input()
    id$ = new Subject<string>();
    price$: Observable<string>;
    constructor(private store: Store<fromPricing.State>) {
        this.price$ = this.id$.withLatestFrom<string,string>(id => store.select(fromPricing.getPriceById(id))).map(v=>v[1]); //store.select(fromPricing.getPriceById(this.id));
    }
}