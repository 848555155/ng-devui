import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-cell',
  standalone: false,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableCellViewTmplComponent {

  @ContentChild(TemplateRef) template: TemplateRef<any>;

}
