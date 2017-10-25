import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
    selector:'es-create-order',
    template:`
        <button> Create Order </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOrderContainerComponent {

}