import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-editable-select-custom-area',
  standalone: false,
  templateUrl: './custom-area.component.html',
  styleUrl: './custom-area.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
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
