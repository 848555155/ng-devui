import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-button-text',
  templateUrl: './text.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TextComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
