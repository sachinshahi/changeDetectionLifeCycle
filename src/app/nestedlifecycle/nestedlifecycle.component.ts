import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nestedlifecycle',
  templateUrl: './nestedlifecycle.component.html',
  styleUrls: ['./nestedlifecycle.component.css']
})
export class NestedlifecycleComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, AfterViewChecked {

  @Input() data: any;
  @Input() secondary: number;
  @Input() http$: Observable<any>;

  constructor() {
  }

  ngOnInit() {
    console.log('nested onInit');
    console.log(this.data);
  }

  ngAfterContentChecked(): void {
    console.log('nested after content init checked');
  }

  ngAfterContentInit(): void {
    console.log('nested content init');
  }

  ngAfterViewInit(): void {
    console.log('nested view Init');
  }

  ngDoCheck(): void {
    console.log('nested DoCheck');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('nested onChanges');
    console.log(changes);
    console.log(this.data);
  }


  test() {
    this.data = {
      counter: this.data.counter - 1
    };
    console.log(this.data);
    console.log('nested test');
  }

  ngAfterViewChecked(): void {
    console.log('nested After view checked');
  }
}
