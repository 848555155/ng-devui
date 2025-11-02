import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DevUICodeboxModule, DevuiDemosData } from '../devui-codebox';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AnchorModule } from 'ng-devui/anchor';

@Component({
  selector: 'd-demo',
  imports: [CommonModule, FormsModule, TranslateModule, AnchorModule, DevUICodeboxModule, DDemoNavModule],
  templateUrl: './devui-demo.component.html',
})
export class DevuiDemoComponent {
  demos = toSignal(inject(ActivatedRoute).data.pipe(map((data) => data.demos as DevuiDemosData)));
  navItems = toSignal(inject(ActivatedRoute).data.pipe(map((data) => data.navItems as any[])));
}
