import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component(
    {
        selector: '<add-product-home-container></add-product-home-container>',
        template:
        `
        <add-product-container></add-product-container>
       <product-list-container></product-list-container>
        `
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)
export class AddProductHomeContainerComponent {
}