import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as fromItems from '../reducers';

@Component({
    selector: '<display-item></display-item>',
    template: `<label style="color:blue">{{name$|async}}</label>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayItemContainerComponent implements AfterViewInit, OnInit {
    @Input()
    id;
    name$: Observable<string>;
    constructor(private store: Store<fromItems.State>) {

    }

    public ngAfterViewInit(): void {

    }

    public ngOnInit(): void {
        this.name$ = this.store.select(fromItems.getNameById(this.id));
    }
}