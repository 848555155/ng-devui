import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BasicComponent {
  tabActiveId: string | number = 'tab2';

  activeTabChange(tab) {
    console.log(tab);
  }
}
