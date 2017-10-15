import { ChangeDetectionStrategy, Component, ElementRef, Output, ViewChildren } from '@angular/core';
@Component(
    {
        selector: '<add-product></add-product>',
        template: `
        <fieldset>
            <legend><h2>Enter Item</h2></legend>
            <div>
                <label>
                    Id:
                    <input #id type="text" />
                </label>
            </div>
            <div>
                <label>
                Name:
                <input #name type="text" />
                </label>
            </div>

            <div>
            <label>
            Name:
            <input #price type="text" />
            </label>
        </div>
        <div>
            <button (click)="addProduct($event)">Add</button>
        </div>
        </fieldset>
        
        `
        ,changeDetection: ChangeDetectionStrategy.OnPush
    }
)
export class AddProductComponent {
    @Output()
    onAddProduct;
    @ViewChildren('id') id: ElementRef;
    @ViewChildren('name') name: ElementRef;
    @ViewChildren('price') price: ElementRef;

    addProduct(event) {
        this.onAddProduct({
            id: this.id.nativeElement.value,
            name: this.name.nativeElement.value,
            price: this.price.nativeElement.value
        })
    }
}