import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'es-toolbar',
  template: `
    <mat-toolbar color="primary" class="example">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    .example {
      display: flex;
      align-items: left;
      flex-wrap: wrap;
      justify-content: center;
    }
    `
  ]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
