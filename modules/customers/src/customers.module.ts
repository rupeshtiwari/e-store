import { LoginFormComponent } from './components/login-form';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormContainerComponent } from './containers/login-form-container';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { UserDetailContainerComponent } from './containers/user-detail';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserIconContainerComponent } from './containers/user-icon';
import { EStoreMaterialModule } from './material.module';
import { reducers } from './reducers/index';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';

export const COMPONENTS = [
    UserIconContainerComponent,
    UserDetailContainerComponent,
    LoginFormComponent,
    LoginFormContainerComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EStoreMaterialModule,
        StoreModule.forFeature('customers', reducers),
        EffectsModule.forFeature([]),
    ],
    exports: COMPONENTS,

})
export class CustomersModule {
    static forRoot() {
        return {
            ngModule: CustomersModule,
            providers: [
                AuthGuard, AuthService
            ]
        };
    }
}
