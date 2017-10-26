import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { Observable } from "rxjs/Observable";
import * as fromRoot  from '../reducers/index';
import * as layout from '../actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>;
  constructor(private store: Store<fromTypes.State>) { }

  public ngOnInit(): void {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.showSidenav$.subscribe(s=>console.log('app',s));
  }
  
  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }
}



