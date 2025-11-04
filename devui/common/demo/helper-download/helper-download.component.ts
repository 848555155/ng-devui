import { HttpClient, HttpProgressEvent } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HelperUtils } from 'ng-devui/common';
import { ButtonModule } from 'ng-devui/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'd-common-helper-download',
  imports: [ButtonModule],
  templateUrl: './helper-download.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperDownloadDemoComponent {
  downError: string;
  sub: Subscription;
  private httpClient = inject(HttpClient);

  download() {
    HelperUtils.downloadFile(
      'assets/Frameworks.png',
      { method: 'POST', params: { name: 'frameworks', mycode: '3344' }, iframename: 'my_iframe' },
      this.downloadError
    );
  }

  downloadFileByHttpClient() {
    this.sub = HelperUtils.downloadFileByHttpClient(
      this.httpClient,
      'assets/Frameworks.png',
      { method: 'POST', params: { name: 'frameworks', mycode: '3344' }, header: { 'X-lang': 'en' } },
      this.downloadError
    );
  }

  downloadError = (response) => {
    this.downError = response;
  };

  downloadProgress = (response: HttpProgressEvent) => {
    if (this.sub && response.loaded > 100) {
      /* Can be used to cancel the request if needed */
      this.sub.unsubscribe();
    }
  };
}
