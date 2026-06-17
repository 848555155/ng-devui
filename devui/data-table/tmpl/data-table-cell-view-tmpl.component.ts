import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-cell',
  standalone: false,
  template: '',
})
export class DataTableCellViewTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
