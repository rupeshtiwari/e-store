import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAddForm from '../actions/add-product-form';
import * as fromItems from '../reducers';
import { MatFormField } from '@angular/material';
import { Subject } from "rxjs/Subject";

@Component({
    selector: '<add-item></add-item>',
    template: `
    <mat-form-field class="example-full-width">
        <input matInput placeholder="enter name" [value]="name$|async"  type="text" (keyup)="update.next($event.target.value)" />
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
export class AddItemContainerComponent implements OnInit, OnDestroy {
    name$;
    update = new Subject<string>();
    updateSubscribe;
    constructor(private store: Store<fromItems.State>) { }

    public ngOnInit(): void {
        this.update
            .debounceTime(500)
            .subscribe(this.dispatchUpdate.bind(this));

        this.name$ = this.store.select(fromItems.getNameFromAddForm);
    }

    public ngOnDestroy(): void {
        this.updateSubscribe.unsubscribe();
    }

    dispatchUpdate(v) {
        this.store.dispatch(new fromAddForm.UpdateProductForm({ name: v }));
    }
}