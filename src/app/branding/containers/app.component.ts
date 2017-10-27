import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../reducers/index';
import * as layout from '../actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
   .es-progress-spinner {
      width:100%,
      position:absolute;
      top:500px;
      left:500px; 
  }
   `
  ]
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>;
  showSpinner$: Observable<boolean>;

  constructor(private store: Store<fromTypes.State>, private router: Router) { }

  public ngOnInit(): void {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.showSpinner$ = this.store.select(fromRoot.showSpinner)

  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  onShowCart() {
    this.router.navigate(['cart']);
  }
}



