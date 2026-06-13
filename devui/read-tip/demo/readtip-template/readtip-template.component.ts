import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReadTipOptions } from 'ng-devui/read-tip';

@Component({
  selector: 'd-demo-template',
  standalone: false,
  templateUrl: './readtip-template.component.html',
  styleUrl: './readtip-template.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ReadtipTemplateComponent implements OnInit {
  readTipOptions: ReadTipOptions = {
    trigger: 'click',
    showAnimate: false,
    position: 'top-left',
    rules: { selector: '.readtip-target' },
  };

  ngOnInit() {}
}
