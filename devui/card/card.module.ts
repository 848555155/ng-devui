import { NgModule } from '@angular/core';
import {
  CardActionsDirective,
  CardAvatarDirective,
  CardComponent,
  CardContentDirective,
  CardExtendComponent,
  CardHeaderComponent,
  CardMetaDirective,
  CardSubtitleDirective,
  CardTitleDirective,
} from './card.component';

@NgModule({
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardAvatarDirective,
    CardMetaDirective,
    CardActionsDirective,
    CardSubtitleDirective,
    CardTitleDirective,
    CardContentDirective,
    CardExtendComponent,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardAvatarDirective,
    CardMetaDirective,
    CardActionsDirective,
    CardSubtitleDirective,
    CardTitleDirective,
    CardContentDirective,
    CardExtendComponent,
  ],
})
export class CardModule {}
