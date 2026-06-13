import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BasicComponent implements OnInit {
  constructor() {}

  readTipOptions1 = {
    rules: {
      selector: '.readtip-target',
      title: 'Name: Jack',
      content: "This is Jack's profile",
    },
  };

  ngOnInit(): void {}
}
