import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-number-translator-design',
  templateUrl: './number-translator-design.component.html',
})
export class NumberTranslatorDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
