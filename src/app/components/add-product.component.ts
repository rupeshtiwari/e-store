import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component(
    {
        selector: '<add-product></add-product>',
        templateUrl: './add-product.component.html'
        , changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [
            `
            .example-form {
                min-width: 150px;
                max-width: 500px;
                width: 100%;
              }
              
              .example-full-width {
                width: 100%;
              }
            `
        ]
    }
)
export class AddProductComponent {
    @Output()
    onAddProduct: EventEmitter<any> = new EventEmitter();;

    addProduct(event: KeyboardEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.onAddProduct.emit()
    }
}