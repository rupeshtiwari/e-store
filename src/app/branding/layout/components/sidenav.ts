import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es-sidenav',
  template: `
    <mat-sidenav [opened]="open">
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [
    `
    mat-sidenav {
      width: 300px;
    }
  `,
  ],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input() open = false;

    public ngOnInit(): void {
        console.log(open);
    }
}