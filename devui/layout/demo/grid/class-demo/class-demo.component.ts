import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-class-demo',
  templateUrl: './class-demo.component.html',
  styleUrls: ['./class-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ClassDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
