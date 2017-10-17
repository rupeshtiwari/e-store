import { Store } from '@ngrx/store';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromPricing from '../reducers';
import * as fromAddForm from '../actions/add-product-form';
import { Subject } from "rxjs/Subject";

@Component({
    selector: '<add-price></add-price>',
    template: `
    <mat-form-field class="example-full-width">
        <input matInput [value]="price$|async"  placeholder="enter price" type="text" (keyup)="update.next($event.target.value)"/>
    </mat-form-field>
`,
    styles: [
        `
    .example-full-width {
        width: 100%;
      }
    `
    ]
})
export class AddPriceContainerComponent implements OnInit, OnDestroy {
    price$;
    update = new Subject<string>();
    updateSubscribe;
    constructor(private store: Store<fromPricing.State>) { }

    public ngOnInit(): void {
        this.update.debounceTime(500).subscribe(this.dispatchUpdate.bind(this));

        this.price$ = this.store.select(fromPricing.getPriceFromAddForm);
    }

     dispatchUpdate(v)    {
        this.store.dispatch(new fromAddForm.UpdateProductForm({ price:v }));
     }

    public ngOnDestroy(): void {
       this.updateSubscribe.unsubscribe();
    }
}