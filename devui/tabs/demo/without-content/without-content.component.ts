import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-without-content',
  standalone: false,
  templateUrl: './without-content.component.html',
  styles: `
      pre {
        border: none;
      }
    `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class WithoutContentComponent {
  tabActiveId: string | number = 'tab2';

  activeTabChange(event) {
    console.log('switch to', event);
  }
}
