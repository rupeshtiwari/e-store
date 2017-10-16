import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component(
    {
        selector: '<add-product></add-product>',
        template: `
        <fieldset>
            <legend><h2>Enter Item</h2></legend>
       
            <div>
                <label>
                Name:
                    <add-item></add-item>
                </label>
            </div>

            <div>
                <label>
                 Price:
                    <add-price></add-price>
              </label>
        </div>
        <div>
            <button (click)="addProduct($event)">Add</button>
        </div>
        </fieldset>
        
        `
        , changeDetection: ChangeDetectionStrategy.OnPush
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