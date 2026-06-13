import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-ngmodel',
  standalone: false,
  templateUrl: './ngmodel.component.html',
  styleUrl: './ngmodel.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class NgmodelComponent implements OnInit {
  searchText = 'devui';
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    console.log(term);
  }
}
