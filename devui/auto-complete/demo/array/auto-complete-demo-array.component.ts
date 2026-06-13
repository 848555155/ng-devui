import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'd-auto-complete-demo-array',
  standalone: false,
  templateUrl: './auto-complete-demo-array.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AutoDemoArrayComponent {
  selectItem2: any;
  languages = [
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
  ];

  onSearchLocal(term) {
    return of(this.languages.filter((lang) => lang.toLowerCase().indexOf(term.toLowerCase()) !== -1));
  }

  selectValue(value) {
    console.log(value);
  }
}
