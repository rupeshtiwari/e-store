import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAddForm from '../actions/add-product-form';
import * as fromItems from '../reducers';

@Component({
    selector: '<display-item></display-item>',
    template: `
    <label>{{name$|async}}</label>
`
})
export class DisplayItemContainerComponent implements OnInit, AfterViewInit {
    name$;
    @Input()
    id;
    constructor(private store: Store<fromItems.State>) { }

    public ngAfterViewInit(): void {
        this.name$ = this.store.select(fromItems.getNameById(this.id));
    }

    public ngOnInit(): void {
       
    }
}