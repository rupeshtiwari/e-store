import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'es-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}