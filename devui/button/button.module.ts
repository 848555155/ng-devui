import { NgModule } from '@angular/core';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [ButtonComponent, ButtonGroupComponent],
  exports: [ButtonComponent, ButtonGroupComponent],
})
export class ButtonModule {}
