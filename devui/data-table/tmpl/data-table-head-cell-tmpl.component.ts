import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-head-cell',
  standalone: false,
  template: '',
})
export class DataTableHeadCellTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
