import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-disable-data-with-source',
  standalone: false,
  templateUrl: './disable-data-with-source.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DisableDataWithSourceComponent {
  selectItem: any;
  languages = [];

  constructor() {
    this.languages = [
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
    ].map((item) => {
      const newItem: any = { label: item };
      if (item.indexOf('Script') !== -1) {
        newItem.disabled = true;
      }
      return newItem;
    });
  }
}
