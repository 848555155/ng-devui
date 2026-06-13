import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BasicComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    console.log(term);
  }
}
