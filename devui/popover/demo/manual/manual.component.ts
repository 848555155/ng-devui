import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-manual',
  standalone: false,
  templateUrl: './manual.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ManualComponent implements OnInit {
  name;
  nameErrMsg = 'The value must contain at least four characters!';
  constructor() {}

  ngOnInit() {}
}
