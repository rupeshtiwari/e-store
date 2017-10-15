import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromRoot from 'app/reducers';
import * as items from '../modules/items/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) { }
  public ngOnInit(): void {
  
  }
}


