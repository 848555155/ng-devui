import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
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
