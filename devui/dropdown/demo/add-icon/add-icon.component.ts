import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-dropdown-demo-add-icon',
  standalone: false,
  templateUrl: './add-icon.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropDownDemoAddIconComponent {
  items: any = ['New', 'Delete', 'Item 1', 'Item 2', 'Item 3', 'Item 4'];

  onToggle(event) {
    console.log(event);
  }
}
