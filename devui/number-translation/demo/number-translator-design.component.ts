import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-number-translator-design',
  templateUrl: './number-translator-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberTranslatorDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
