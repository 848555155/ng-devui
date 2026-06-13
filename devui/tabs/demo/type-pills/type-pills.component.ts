import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-type-pills',
  standalone: false,
  templateUrl: './type-pills.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TypePillsComponent {
  tabActiveId: string | number = 'tab1';
  activeTabData;
  tabItems = [
    {
      id: 'tab1',
      title: 'Tab1',
    },
    {
      id: 'tab2',
      title: 'Tab2',
    },
    {
      id: 'tab3',
      title: 'Tab3',
    },
  ];

  activeTabChange(tab) {
    console.log(tab);
  }
}
