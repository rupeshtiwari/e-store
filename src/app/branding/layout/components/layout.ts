import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'es-layout',
  template: `
    <mat-sidenav-container fullscreen>
      <ng-content></ng-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
    mat-sidenav-container {
      background: rgba(0, 0, 0, 0.03);
    }
    *, /deep/ * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `,
  ],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}