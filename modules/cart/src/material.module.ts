import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const MODULES = [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
]

@NgModule({
    imports: MODULES,
    exports: MODULES,
})
export class EStoreMaterialModule { }