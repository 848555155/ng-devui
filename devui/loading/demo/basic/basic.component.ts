import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { LoadingModule, LoadingType } from 'ng-devui/loading';
import { pullAt, random } from 'lodash-es';
import { from, tap } from 'rxjs';
import { ButtonModule } from 'ng-devui/button';

const mockFetchNames = (url: string) =>
  new Promise((resolve) => {
    const mockNames = [
      'Arnold',
      'Ashley',
      'Atkins',
      'Burton',
      'Butler',
      'Byers',
      'Byrd',
      'Cabrera',
      'Dyer',
      'Eaton',
      'Francis',
      'Franco',
      'Stone',
      'Talley',
      'Tanner',
      'Tyson',
      'Underwood',
      'Valdez',
      'Vang',
      'Wade',
      'Wynn',
      'Yang',
      'Young',
      'Zamora',
      'Zimmerman',
    ];

    const getRandomName = () => {
      const margin = mockNames.length - 1;
      return pullAt(mockNames, [random(margin), random(margin), random(margin)]);
    };

    setTimeout(() => {
      resolve([getRandomName(), getRandomName(), getRandomName()]);
    }, 2500);
  });

@Component({
  selector: 'd-basic',
  imports: [ButtonModule, LoadingModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {
  loading = signal<LoadingType>(undefined);
  tableNames = signal<string[][]>([]);
  view = {
    top: '50px',
    left: '50%',
  };

  fetchTableData() {
    this.loading.set(
      from(mockFetchNames('//example.com/names/random')).pipe(
        tap((tablNames: string[][]) => {
          this.tableNames.update(() => tablNames);
        })
      )
    );
  }
}
