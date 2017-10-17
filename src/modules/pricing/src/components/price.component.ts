import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: '<price></price>',
    template: `<label style="color:red">{{displayingPrice()}}</label>`
    ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {
    @Input()
    price: string;

    displayingPrice() {
        return `$${this.price}`;
    }
}

