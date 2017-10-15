import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: '<price></price>',
    template: `<div>{{displayingPrice()}}</div>`
    ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {
    @Input()
    price: string;

    displayingPrice() {
        return `$ ${this.price}`;
    }
}

