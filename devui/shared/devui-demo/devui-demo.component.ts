import { CommonModule } from '@angular/common';
import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { DevUICodeboxModule, DevuiDemosData } from '../devui-codebox';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AnchorModule } from 'ng-devui/anchor';

@Component({
  selector: 'd-demo',
  imports: [CommonModule, FormsModule, TranslatePipe, AnchorModule, DevUICodeboxModule, DDemoNavModule],
  templateUrl: './devui-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DevuiDemoComponent {
  readonly demos = toSignal(inject(ActivatedRoute).data.pipe(map((data) => data.demos as DevuiDemosData)));
  readonly categoryName = toSignal(inject(ActivatedRoute).data.pipe(map((data) => data.categoryName as string)));
}
