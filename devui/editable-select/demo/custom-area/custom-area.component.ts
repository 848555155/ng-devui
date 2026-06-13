import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-editable-select-custom-area',
  templateUrl: './custom-area.component.html',
  styleUrls: ['./custom-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CustomAreaComponent implements OnInit {
  selectItem: any;
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
  hoverItem: any;

  constructor() {}

  ngOnInit(): void {}

  onHoverItem(event) {
    this.hoverItem = event;
  }
}
