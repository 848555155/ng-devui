import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-accordion-design',
  templateUrl: './accordion-design.component.html',
})
export class AccordionDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
