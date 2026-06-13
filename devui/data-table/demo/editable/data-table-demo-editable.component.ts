import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EditableTip } from 'ng-devui/data-table';
import { cloneDeep } from 'lodash-es';
import { editableOriginSource, genderSource } from '../mock-data';

@Component({
  selector: 'd-editable',
  standalone: false,
  templateUrl: './data-table-demo-editable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DatatableDemoEditableComponent implements OnInit {
  genderSource = genderSource;
  basicDataSource = cloneDeep(editableOriginSource.slice(0, 6));

  editableTip = EditableTip.hover;
  nameEditing: boolean;

  ngOnInit() {}

  onEditEnd(rowItem, field) {
    rowItem[field] = false;
  }

  beforeEditStart = (rowItem, field) => {
    return true;
  };

  beforeEditEnd = (rowItem, field) => {
    console.log('beforeEditEnd');
    if (rowItem && rowItem[field].length < 3) {
      return false;
    } else {
      return true;
    }
  };
}
