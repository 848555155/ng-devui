import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-alone-flex',
  templateUrl: './alone-flex.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AloneFlexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
