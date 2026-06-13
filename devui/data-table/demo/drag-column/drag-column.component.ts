import { Component, ChangeDetectionStrategy } from '@angular/core';
import { originSource, SourceType } from '../mock-data';

@Component({
  selector: 'd-drag-column',
  standalone: false,
  templateUrl: 'drag-column.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DragColumnComponent {
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'firstName',
        header: 'First Name',
        fieldType: 'text',
      },
      {
        field: 'lastName',
        header: 'Last Name',
        fieldType: 'text',
      },
      {
        field: 'gender',
        header: 'gender',
        fieldType: 'text',
      },
      {
        field: 'dob',
        header: 'Date of birth',
        fieldType: 'date',
      },
    ],
  };

  onDragEnd(dragData) {
    console.log(dragData);
  }
}
