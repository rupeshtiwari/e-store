import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTypes from 'e-store-typings';
import { NAVIGATE_PRODUCTS_PAGE, ProductId } from 'e-store-typings';
import { Observable } from 'rxjs/Rx';
import * as fromRoot from '../reducers';
@Component(
    {
        selector: '<product-list-container></product-list-container>',
        template:
        `
        <mat-card>
        <mat-card-title>Products</mat-card-title>
        <div *ngIf="productIds$ | async">
             
         <mat-card *ngFor="let id of productIds$ | async; trackBy:trackProduct">
                <mat-card-content>
                   <es-product-name [id]="id"></es-product-name>
                   <es-product-price [id]="id"></es-product-price>
                </mat-card-content>
         </mat-card>
           
          </div>
         
       </mat-card>
        `
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class ProductListContainerComponent implements OnInit {
    productIds$: Observable<ProductId[]>;
    constructor(private store: Store<fromTypes.State>) {
    }

    trackProduct(index, product) {
        return product;
    }

    public ngOnInit(): void {
        this.productIds$ = this.store.select(fromRoot.getAllProducts);
        this.store.dispatch({ type: NAVIGATE_PRODUCTS_PAGE });
    }
}