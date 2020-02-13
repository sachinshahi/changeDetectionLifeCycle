import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-my-change-detect',
  template: `Number of ticks: {{numberOfTicks}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyChangeDetectComponent {
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      // require view to be updated
      this.ref.markForCheck();
    }, 1000);
  }
}

class DataListProvider {
  // in a real application the returned data will be different every time
  get data() { return [1, 2, 3, 4, 5]; }
}

@Component({
  selector: 'giant-list',
  template: `
      <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
    `,
})
export class GiantList {
  constructor(private ref: ChangeDetectorRef, private dataProvider: DataListProvider) {
    ref.detach();
    setInterval(() => { this.ref.detectChanges(); }, 5000);
  }
}

@Component({
  selector: 'app1',
  providers: [DataListProvider],
  template: `
      <giant-list></giant-list>
    `,
})
export class App1 {
}
