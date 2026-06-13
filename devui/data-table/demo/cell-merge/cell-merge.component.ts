import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { originSource, SourceType } from '../mock-data';

@Component({
  selector: 'd-cell-merge',
  standalone: false,
  templateUrl: './cell-merge.component.html',
  styleUrl: './cell-merge.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CellMergeComponent implements OnInit {
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  constructor() {}

  ngOnInit() {}
}
