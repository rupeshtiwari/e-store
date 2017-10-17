import { ToolbarComponent } from './components/toolbar';
import { SidenavComponent } from './components/sidenav';
import { NavItemComponent } from './components/nav-item';
import { LayoutComponent } from './components/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


export const COMPONENTS = [
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
        };
    }
}