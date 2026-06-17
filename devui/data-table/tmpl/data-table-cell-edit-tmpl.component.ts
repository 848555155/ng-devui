import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-cell-edit',
  standalone: false,
  template: '',
})
export class DataTableCellEditTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  dataPicker;
}
