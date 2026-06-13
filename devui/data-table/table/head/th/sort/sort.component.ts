import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { SortDirection, SortEventArg } from '../../../../data-table.model';

@Component({
  selector: 'd-table-sort',
  standalone: false,
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SortComponent implements OnInit {
  @Input() sortDirection: SortDirection;
  @HostBinding('class.devui-icon-show')
  @Input()
    showSortIcon = false;
  @Output() sortEvent = new EventEmitter<SortEventArg>();

  @HostBinding('class.devui-icon-show')
  get canShow() {
    return this.showSortIcon || this.sortDirection === 'ASC' || this.sortDirection === 'DESC';
  }

  constructor() {}

  ngOnInit() {}

  sort() {
    switch (this.sortDirection) {
    case SortDirection.ASC:
      this.sortDirection = SortDirection.DESC;
      break;
    case 'DESC':
      this.sortDirection = SortDirection.default;
      break;
    case SortDirection.default:
    default:
      this.sortDirection = SortDirection.ASC;
    }
    this.sortEvent.emit({ direction: this.sortDirection });
  }
}
