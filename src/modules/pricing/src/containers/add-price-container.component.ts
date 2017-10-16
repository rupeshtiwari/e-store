import { Store } from '@ngrx/store';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromPricing from '../reducers';
import * as fromAddForm from '../actions/add-product-form';

@Component({
    selector: '<add-price></add-price>',
    template: `
    <input #price type="text" />
`
})
export class AddPriceContainerComponent implements AfterViewInit {
    @ViewChild('price') price: ElementRef;
    constructor(private store: Store<fromPricing.State>) { }
    public ngAfterViewInit(): void {
        const priceChange$ = Observable.fromEvent(this.price.nativeElement, 'input');
        priceChange$.subscribe((s: any) => {
            console.log(s.target.value);
            this.store.dispatch(new fromAddForm.UpdateProductForm({ price: s.target.value }));
        });
    }
}