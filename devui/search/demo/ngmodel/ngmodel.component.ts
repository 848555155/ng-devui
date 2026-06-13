import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NgmodelComponent implements OnInit {
  searchText = 'devui';
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    console.log(term);
  }
}
