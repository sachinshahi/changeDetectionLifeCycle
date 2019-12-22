import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() secondary: number;
  @Input() http$: Observable<any>;
  http$2: Observable<any>;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data1: any;
  constructor(private  hppClient: HttpClient, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    /*this.http$.subscribe(d => {
      console.log(d);
    });*/
    setInterval(() => {
     //console.log('i');
      this.test();
      //this.fetch();
      //this.eventEmitter.next(this.data1);
    }, 5000);
  }

  test() {
     this.data.counter = this.data.counter - 1;

    /*this.data = {
      counter: this.data.counter - 1
    };*/
    console.log(this.data);
    console.log('test');
    this.cd.markForCheck();

    // this.eventEmitter.next(this.data1);
  }

  ngDoCheck() {
    console.log('child component do check');
    console.log('child do check Data');
    console.log(this.data.counter);
  }

  fetch() {
    this.data1 = {};
    /*this.hppClient.get('http://localhost:3000/datas').subscribe(d => {
      console.log('data1');
      this.data1 = d;
    });*/
    this.http$2 = this.hppClient.get('http://localhost:3000/datas');

  }

  functioncall() {
    console.log('function call');
    return this.data.counter;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child component');
    console.log(changes);
  }
}
