import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
    selector:'es-create-order',
    template:`
        <button mat-raised-button color="primary"> Create Order </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOrderContainerComponent {

}