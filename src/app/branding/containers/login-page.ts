import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component(
    {
        selector: 'es-login-page',
        template: '<es-login-form-container></es-login-form-container>'
        , changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class LoginPageContainerComponent {

}
