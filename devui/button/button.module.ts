import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DCommonModule } from 'ng-devui/common';
import { LoadingModule } from 'ng-devui/loading';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, LoadingModule, DCommonModule, ButtonComponent, ButtonGroupComponent],
  exports: [ButtonComponent, ButtonGroupComponent],
})
export class ButtonModule {}
