import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
  tabActiveId: string | number = 'tab2';

  activeTabChange(tab) {
    console.log(tab);
  }
}
