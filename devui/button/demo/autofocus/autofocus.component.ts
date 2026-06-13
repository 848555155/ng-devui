import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-button-autofocus',
  templateUrl: './autofocus.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AutofocusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
