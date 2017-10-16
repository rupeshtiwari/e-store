import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAddForm from '../actions/add-product-form';
import * as fromPricing from '../reducers';

@Component({
    selector: '<add-item></add-item>',
    template: `
    <input #name type="text" />
`
})
export class AddItemContainerComponent implements AfterViewInit {
    @ViewChild('name') name: ElementRef;
    constructor(private store: Store<fromPricing.State>) { }
    public ngAfterViewInit(): void {
        const priceChange$ = Observable.fromEvent(this.name.nativeElement, 'input');
        priceChange$.subscribe((s: any) => {
            console.log(s.target.value);
            this.store.dispatch(new fromAddForm.UpdateProductForm({name:s.target.value}));
        });
    }
}