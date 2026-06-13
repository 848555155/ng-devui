import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SourceType, originSource } from './../mock-data';

@Component({
  selector: 'd-memory-table-demo',
  standalone: false,
  templateUrl: './memory-table.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MemoryTableComponent implements OnInit {
  dataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  constructor() {}

  ngOnInit() {}
}
