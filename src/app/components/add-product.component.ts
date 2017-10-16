import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component(
    {
        selector: '<add-product></add-product>',
        template: `
        <fieldset>
            <legend><h2>Enter Item</h2></legend>
            <div>
                <label>
                    Id:
                    <input #productId type="text" />
                </label>
            </div>
            <div>
                <label>
                Name:
                <input #productName type="text" />
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
    @ViewChild('productId') productId: ElementRef;
    @ViewChild('productName') productName: ElementRef;
    @ViewChild('productPrice') productPrice: ElementRef;

    addProduct(event: KeyboardEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.onAddProduct.emit({
            id: this.productId.nativeElement.value,
            name: this.productName.nativeElement.value,
            price: this.productPrice.nativeElement.value
        })
    }
}